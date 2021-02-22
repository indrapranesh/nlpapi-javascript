import { Error } from "../interfaces/error.interface";

export const ExpertAiRequestError = (status: number, data = null): Error => {
    return {
        statusCode: status,
        error: data
    }
}