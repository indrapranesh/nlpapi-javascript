import { rejects } from 'assert';
import axios from 'axios';
import { OAUTH2_TOKEN_URL } from './src/constants/common.constants';
import { LoginReq } from './src/interfaces/token.interface';

export async function getToken(username: string, password: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            let body: LoginReq = {
                username: username,
                password: password
            };
            let token = await axios.post(`${OAUTH2_TOKEN_URL}`, body);
            resolve(token);
        } catch(err) {
            reject(err.response.data);
        }
    })
}

