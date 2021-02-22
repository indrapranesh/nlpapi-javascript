import axios from "axios";
import { BASE_API_URL, API_PATHS } from "../constants/common.constants";

export async function categorize(body: any, token: string,taxonomy: string, language: string) {
    return new Promise(async (resolve, reject) => {
        try {
            let headers = {
                Authorization: `Bearer ${token}`
            }
            let response = await axios.post(`${BASE_API_URL}/${API_PATHS.CLASSIFICATION_PATH(taxonomy, language)}`, body, {headers: headers});
            resolve(response.data);
        } catch(err) {
            reject({
                status: err.resposne.status,
                error: err.response.data
            });
        }
    })
}

export async function getTaxonomies(token: string) {
    return new Promise(async (resolve, reject) => {
        try {
            let headers = {
                Authorization: `Bearer ${token}`
            }
            let resposne = await axios.get(`${BASE_API_URL}/${API_PATHS.TAXONOMIES_PATH}`, {headers: headers});
            resolve(resposne.data);
        } catch(err) {
            reject({
                status: err.resposne.status,
                error: err.response.data
            });
        }
    })
}

export async function getTaxonomy(token: string, taxonomy: string, language: string) {
    return new Promise(async (resolve, reject) => {
        try {
            let headers = {
                Authorization: `Bearer ${token}`
            }
            let resposne = await axios.get(`${BASE_API_URL}/${API_PATHS.TAXONOMY_PATH(taxonomy, language)}`, {headers: headers});
            resolve(resposne.data);
        } catch(err) {
            reject({
                status: err.resposne.status,
                error: err.response.data
            });
        }
    })
}