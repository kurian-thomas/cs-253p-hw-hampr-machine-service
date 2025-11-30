import { HttpResponseCode } from "../handler/model";

export class TokenValidationError extends Error {
  constructor() {
    const message = JSON.stringify({
      statusCode: HttpResponseCode.UNAUTHORIZED,
      message: 'Invalid token',
    });
    super(message);
    this.name = "TokenValidationError";
  }
}
