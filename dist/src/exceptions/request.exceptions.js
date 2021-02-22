"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpertAiRequestError = void 0;
const ExpertAiRequestError = (status, data = null) => {
    return {
        statusCode: status,
        error: data
    };
};
exports.ExpertAiRequestError = ExpertAiRequestError;
