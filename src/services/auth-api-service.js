import config from '../config';
import TokenService from './token-service';
const AuthApiService = {
    postLogin(email, password) {
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        };
        return fetch(`${config.API_ENDPOINT}/api/auth/login`, options)
            .then(res =>
                (!res.ok) ?
                res.json().then(e => Promise.reject(e)) : res.json());
    }
};
export default AuthApiService;