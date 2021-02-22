import { Error } from "../interfaces/error.interface";

export class BaseError extends Error {

    constructor(error: Error) {
        super(`${error.error}`);
    }

}