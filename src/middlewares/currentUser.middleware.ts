import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface ICurrentUser {
  email: string;
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: ICurrentUser;
    }
  }
}

const currentUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const currentUser = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as ICurrentUser;
    req.currentUser = currentUser;
  } catch (error) {
    console.log(error);
  }
  next();
};

export { currentUserMiddleware };
