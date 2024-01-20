import { Request, Response, NextFunction } from "express";
declare const reqValidationMiddleware: (req: Request, res: Response, next: NextFunction) => void;
export { reqValidationMiddleware };
