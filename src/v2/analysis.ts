import { BASE_API_URL, API_PATHS } from "../constants/common.constants";
import axios from "axios";

export async function fullAnalysis(body: any, token: string, language: string) {
    return new Promise(async (resolve, reject) => {
        try {
            let headers = {
                Authorization: `Bearer ${token}`
            }
            let response = await axios.post(`${BASE_API_URL}/${API_PATHS.FULL_ANALYSIS_PATH(language)}`, body, {headers: headers});
            resolve(response.data);
        } catch(err) {
            reject({
                status: err.resposne.status,
                error: err.response.data
            });
        }
    })
}

export async function partialAnalysis(body: any, token: string, language: string, resource: string) {
    return new Promise(async (resolve, reject) => {
        try {
            let headers = {
                Authorization: `Bearer ${token}`
            }
            let response = await axios.post(`${BASE_API_URL}/${API_PATHS.ANALYSIS_PATH(language, resource)}`, body, {headers: headers});
            resolve(response.data);
        } catch(err) {
            reject({
                status: err.resposne.status,
                error: err.response.data
            });
        }
    })
}

export async function getContexts(token: string) {
    return new Promise(async (resolve, reject) => {
        try {
            let headers = {
                Authorization: `Bearer ${token}`
            }
            let resposne = await axios.get(`${BASE_API_URL}/${API_PATHS.CONTEXTS_PATH}`, {headers: headers});
            resolve(resposne.data);
        } catch(err) {
            reject({
                status: err.resposne.status,
                error: err.response.data
            });
        }
    })
}