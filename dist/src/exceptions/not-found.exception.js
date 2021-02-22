"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const base_exception_1 = require("./base.exception");
class NotFoundException extends base_exception_1.BaseError {
    constructor(err) {
        const error = {
            error: err,
            statusCode: 404
        };
        super(error);
    }
}
exports.NotFoundException = NotFoundException;
