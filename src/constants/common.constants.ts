
export const BASE_API_URL = "https://nlapi.expert.ai/v2"
export const BASE_EDGE_URL = "https://edgeapi.expert.ai"

export const OAUTH2_TOKEN_URL = "https://developer.expert.ai/oauth2/token"

export const USERNAME_ENV_VARIABLE = "EAI_USERNAME"
export const PASSWORD_ENV_VARIABLE = "EAI_PASSWORD"
export const TOKEN_ENV_VARIABLE = "AUTH_TOKEN"
export const AUTH_HEADER_KEY = "Authorization"
export const AUTH_HEADER_VALUE = "Bearer {}"

export const TK_TIMESTAMP_FILENAME = ".timestamp";

export const API_PATHS = {
    FULL_ANALYSIS_PATH:(language: string) => `analyze/standard/${language}`,
    ANALYSIS_PATH:(language: string, resource: string) => `analyze/standard/${language}/${resource}`,
    DETECT_PATH : "detect/${detector}/${language}",
    CLASSIFICATION_PATH:(taxonomy: string, language: string) => `categorize/${taxonomy}/${language}`,
    EXECUTION_KEY_PATH : "edge/key/${footprint}",
    CONTEXTS_PATH :"contexts",
    DETECTORS_PATH : "detectors",
    TAXONOMIES_PATH : "taxonomies",
    TAXONOMY_PATH:(taxonomy: string, language: string) => `taxonomies/${taxonomy}/${language}`
}

export const CONTENT_TYPE_HEADER = {"Content-Type": "application/json"}

export const URLS_AND_METHODS = {
    FULL_ANALYSIS_PATH: "POST",
    DETECT_PATH: "POST",
    ANALYSIS_PATH: "POST",
    CLASSIFICATION_PATH: "POST",
    CONTEXTS_PATH: "GET",
    DETECTORS_PATH: "GET",
    TAXONOMIES_PATH: "GET",
    TAXONOMY_PATH: "GET",
    EXECUTION_KEY_PATH: "GET"        
}

export const HTTP_GET = "GET"
export const HTTP_SUCCESSFUL = 200
export const HTTP_BAD_REQUEST = 400
export const HTTP_UNAUTHORIZED = 401
export const HTTP_FORBIDDEN = 403
export const HTTP_NOT_FOUND = 404
export const HTTP_INTERNAL_SERVER_ERROR = 500


export const HTTP_ERRORS = {
    HTTP_UNAUTHORIZED: "UNAUTHORIZED",
    HTTP_FORBIDDEN: "FORBIDDEN",
    HTTP_NOT_FOUND: "NOT FOUND",
    HTTP_INTERNAL_SERVER_ERROR: "INTERNAL SERVER ERROR",
}

export const UNKNOWN = "UNKNOWN_STATUS"
export const SUCCESSFUL = "SUCCESSFUL"
export const BAD_REQUEST = "BAD REQUEST"

export const PARAMETER_NAMES = ["language", "resource", "context", "taxonomy", "footprint","detector"]

export const LANGUAGES = {
    de: "German",
    en: "English",
    es: "Spanish",
    fr: "French",
    it: "Italian",
}
export const DETECTORS = {
    "pii": "Protected Information"
}

export const RESOURCES_NAMES = ["disambiguation", "relevants", "entities", "relations", "sentiment"]

export const RESPONSE_KEYS_TO_IGNORE = ["language", "version", "content"]