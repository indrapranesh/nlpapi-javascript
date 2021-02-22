export declare const BASE_API_URL = "https://nlapi.expert.ai/v2";
export declare const BASE_EDGE_URL = "https://edgeapi.expert.ai";
export declare const OAUTH2_TOKEN_URL = "https://developer.expert.ai/oauth2/token";
export declare const USERNAME_ENV_VARIABLE = "EAI_USERNAME";
export declare const PASSWORD_ENV_VARIABLE = "EAI_PASSWORD";
export declare const TOKEN_ENV_VARIABLE = "AUTH_TOKEN";
export declare const AUTH_HEADER_KEY = "Authorization";
export declare const AUTH_HEADER_VALUE = "Bearer {}";
export declare const TK_TIMESTAMP_FILENAME = ".timestamp";
export declare const API_PATHS: {
    FULL_ANALYSIS_PATH: (language: string) => string;
    ANALYSIS_PATH: (language: string, resource: string) => string;
    DETECT_PATH: string;
    CLASSIFICATION_PATH: string;
    EXECUTION_KEY_PATH: string;
    CONTEXTS_PATH: string;
    DETECTORS_PATH: string;
    TAXONOMIES_PATH: string;
    TAXONOMY_PATH: string;
};
export declare const CONTENT_TYPE_HEADER: {
    "Content-Type": string;
};
export declare const URLS_AND_METHODS: {
    FULL_ANALYSIS_PATH: string;
    DETECT_PATH: string;
    ANALYSIS_PATH: string;
    CLASSIFICATION_PATH: string;
    CONTEXTS_PATH: string;
    DETECTORS_PATH: string;
    TAXONOMIES_PATH: string;
    TAXONOMY_PATH: string;
    EXECUTION_KEY_PATH: string;
};
export declare const HTTP_GET = "GET";
export declare const HTTP_SUCCESSFUL = 200;
export declare const HTTP_BAD_REQUEST = 400;
export declare const HTTP_UNAUTHORIZED = 401;
export declare const HTTP_FORBIDDEN = 403;
export declare const HTTP_NOT_FOUND = 404;
export declare const HTTP_INTERNAL_SERVER_ERROR = 500;
export declare const HTTP_ERRORS: {
    HTTP_UNAUTHORIZED: string;
    HTTP_FORBIDDEN: string;
    HTTP_NOT_FOUND: string;
    HTTP_INTERNAL_SERVER_ERROR: string;
};
export declare const UNKNOWN = "UNKNOWN_STATUS";
export declare const SUCCESSFUL = "SUCCESSFUL";
export declare const BAD_REQUEST = "BAD REQUEST";
export declare const PARAMETER_NAMES: string[];
export declare const LANGUAGES: {
    de: string;
    en: string;
    es: string;
    fr: string;
    it: string;
};
export declare const DETECTORS: {
    pii: string;
};
export declare const RESOURCES_NAMES: string[];
export declare const RESPONSE_KEYS_TO_IGNORE: string[];
