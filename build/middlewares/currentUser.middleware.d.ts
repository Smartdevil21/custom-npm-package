import { Request, Response, NextFunction } from "express";
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
declare const currentUserMiddleware: (req: Request, res: Response, next: NextFunction) => void;
export { currentUserMiddleware };
