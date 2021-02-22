"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContexts = exports.partialAnalysis = exports.fullAnalysis = void 0;
const common_constants_1 = require("../constants/common.constants");
const axios_1 = __importDefault(require("axios"));
function fullAnalysis(body, token, language) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let headers = {
                    Authorization: `Bearer ${token}`
                };
                let response = yield axios_1.default.post(`${common_constants_1.BASE_API_URL}/${common_constants_1.API_PATHS.FULL_ANALYSIS_PATH(language)}`, body, { headers: headers });
                resolve(response.data);
            }
            catch (err) {
                reject({
                    status: err.resposne.status,
                    error: err.response.data
                });
            }
        }));
    });
}
exports.fullAnalysis = fullAnalysis;
function partialAnalysis(body, token, language, resource) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let headers = {
                    Authorization: `Bearer ${token}`
                };
                let response = yield axios_1.default.post(`${common_constants_1.BASE_API_URL}/${common_constants_1.API_PATHS.ANALYSIS_PATH(language, resource)}`, body, { headers: headers });
                resolve(response.data);
            }
            catch (err) {
                reject({
                    status: err.resposne.status,
                    error: err.response.data
                });
            }
        }));
    });
}
exports.partialAnalysis = partialAnalysis;
function getContexts(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let headers = {
                    Authorization: `Bearer ${token}`
                };
                let resposne = yield axios_1.default.get(`${common_constants_1.BASE_API_URL}/${common_constants_1.API_PATHS.CONTEXTS_PATH}`, { headers: headers });
                resolve(resposne.data);
            }
            catch (err) {
                reject({
                    status: err.resposne.status,
                    error: err.response.data
                });
            }
        }));
    });
}
exports.getContexts = getContexts;
