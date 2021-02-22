import { BaseError } from "./base.exception";
import { Error } from "../interfaces/error.interface";

export class NotFoundException extends BaseError {
  constructor(err: string) {
    const error: Error = {
      error: err,
      statusCode: 404
    }
    super(error);
  }
}