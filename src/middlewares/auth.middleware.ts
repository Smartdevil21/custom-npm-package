import { Request, Response, NextFunction, RequestHandler } from "express";
import { NotAuthorizedError } from "../errors/notAuthorized.error";
// import { currentUserMiddleware } from "./currentUser.middleware";

const authMiddleware: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    throw new NotAuthorizedError();
  }
  next();
};

export { authMiddleware };
