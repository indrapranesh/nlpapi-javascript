"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESPONSE_KEYS_TO_IGNORE = exports.RESOURCES_NAMES = exports.DETECTORS = exports.LANGUAGES = exports.PARAMETER_NAMES = exports.BAD_REQUEST = exports.SUCCESSFUL = exports.UNKNOWN = exports.HTTP_ERRORS = exports.HTTP_INTERNAL_SERVER_ERROR = exports.HTTP_NOT_FOUND = exports.HTTP_FORBIDDEN = exports.HTTP_UNAUTHORIZED = exports.HTTP_BAD_REQUEST = exports.HTTP_SUCCESSFUL = exports.HTTP_GET = exports.URLS_AND_METHODS = exports.CONTENT_TYPE_HEADER = exports.API_PATHS = exports.TK_TIMESTAMP_FILENAME = exports.AUTH_HEADER_VALUE = exports.AUTH_HEADER_KEY = exports.TOKEN_ENV_VARIABLE = exports.PASSWORD_ENV_VARIABLE = exports.USERNAME_ENV_VARIABLE = exports.OAUTH2_TOKEN_URL = exports.BASE_EDGE_URL = exports.BASE_API_URL = void 0;
exports.BASE_API_URL = "https://nlapi.expert.ai/v2";
exports.BASE_EDGE_URL = "https://edgeapi.expert.ai";
exports.OAUTH2_TOKEN_URL = "https://developer.expert.ai/oauth2/token";
exports.USERNAME_ENV_VARIABLE = "EAI_USERNAME";
exports.PASSWORD_ENV_VARIABLE = "EAI_PASSWORD";
exports.TOKEN_ENV_VARIABLE = "AUTH_TOKEN";
exports.AUTH_HEADER_KEY = "Authorization";
exports.AUTH_HEADER_VALUE = "Bearer {}";
exports.TK_TIMESTAMP_FILENAME = ".timestamp";
exports.API_PATHS = {
    FULL_ANALYSIS_PATH: (language) => `analyze/standard/${language}`,
    ANALYSIS_PATH: (language, resource) => `analyze/standard/${language}/${resource}`,
    DETECT_PATH: "detect/${detector}/${language}",
    CLASSIFICATION_PATH: "categorize/${taxonomy}/${language}",
    EXECUTION_KEY_PATH: "edge/key/${footprint}",
    CONTEXTS_PATH: "contexts",
    DETECTORS_PATH: "detectors",
    TAXONOMIES_PATH: "taxonomies",
    TAXONOMY_PATH: "taxonomies/${taxonomy}/${language}"
};
exports.CONTENT_TYPE_HEADER = { "Content-Type": "application/json" };
exports.URLS_AND_METHODS = {
    FULL_ANALYSIS_PATH: "POST",
    DETECT_PATH: "POST",
    ANALYSIS_PATH: "POST",
    CLASSIFICATION_PATH: "POST",
    CONTEXTS_PATH: "GET",
    DETECTORS_PATH: "GET",
    TAXONOMIES_PATH: "GET",
    TAXONOMY_PATH: "GET",
    EXECUTION_KEY_PATH: "GET"
};
exports.HTTP_GET = "GET";
exports.HTTP_SUCCESSFUL = 200;
exports.HTTP_BAD_REQUEST = 400;
exports.HTTP_UNAUTHORIZED = 401;
exports.HTTP_FORBIDDEN = 403;
exports.HTTP_NOT_FOUND = 404;
exports.HTTP_INTERNAL_SERVER_ERROR = 500;
exports.HTTP_ERRORS = {
    HTTP_UNAUTHORIZED: "UNAUTHORIZED",
    HTTP_FORBIDDEN: "FORBIDDEN",
    HTTP_NOT_FOUND: "NOT FOUND",
    HTTP_INTERNAL_SERVER_ERROR: "INTERNAL SERVER ERROR",
};
exports.UNKNOWN = "UNKNOWN_STATUS";
exports.SUCCESSFUL = "SUCCESSFUL";
exports.BAD_REQUEST = "BAD REQUEST";
exports.PARAMETER_NAMES = ["language", "resource", "context", "taxonomy", "footprint", "detector"];
exports.LANGUAGES = {
    de: "German",
    en: "English",
    es: "Spanish",
    fr: "French",
    it: "Italian",
};
exports.DETECTORS = {
    "pii": "Protected Information"
};
exports.RESOURCES_NAMES = ["disambiguation", "relevants", "entities", "relations", "sentiment"];
exports.RESPONSE_KEYS_TO_IGNORE = ["language", "version", "content"];
