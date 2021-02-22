"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    constructor(error) {
        super(`${error.error}`);
    }
}
exports.BaseError = BaseError;
