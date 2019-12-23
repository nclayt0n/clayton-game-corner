import config from '../config';

const TokenService = {
    saveAuthToken(token) {
        window.sessionStorage.setItem(config.TOKEN_KEY, token);
    },
    decodeAuthToken(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        let user_id = JSON.parse(jsonPayload).user_id;
        return user_id;
    },
    getAuthToken() {
        return window.sessionStorage.getItem(config.TOKEN_KEY);
    },
    clearAuthToken() {
        window.sessionStorage.removeItem(config.TOKEN_KEY);
    },
    hasAuthToken() {
        return !!TokenService.getAuthToken();
    },
    makeBasicAuthToken(email, password) {
        return window.btoa(`${email}:${password}`);
    },
};

export default TokenService;