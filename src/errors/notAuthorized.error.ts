import { CustomError } from "./custom-error";

class NotAuthorizedError extends CustomError {
  statusCode: number = 401;
  serializeErrors(): { message: string; field?: string | undefined }[] {
    return [{ message: "401 Unauthorized" }];
  }

  constructor() {
    super("Unauthorized request!");
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
}

export { NotAuthorizedError };
