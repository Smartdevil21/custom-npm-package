import { CustomError } from "./custom-error";
declare class NotAuthorizedError extends CustomError {
    statusCode: number;
    serializeErrors(): {
        message: string;
        field?: string | undefined;
    }[];
    constructor();
}
export { NotAuthorizedError };
