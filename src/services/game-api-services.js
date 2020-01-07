import config from '../config';
const GameApiService = {
    getApiCall(url) {
        let options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        return fetch(url, options)
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
    },
    // postReview(title, game_type, link, picture, review) {
    postReview(formData) {
        console.log(formData)
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": `${config.API_ENDPOINT}/game/review`,
            "method": "POST",
            "headers": {
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "accept-encoding": "gzip, deflate",
                "Connection": "keep-alive"
            },
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": formData
        };
        return fetch(settings)
            .then(res =>
                (!res.ok) ?
                res.json().then(e => Promise.reject(e)) : res.json());
    },
    patchReview(url, updatedReview) {
        const { id, title, game_type, link, picture, review } = updatedReview;
        const options = {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ id, title, game_type, link, picture, review })
        };
        return fetch(url, options)
    },
    postUpcoming(date, game_type, title) {
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },

            body: JSON.stringify({ date, game_type, title }),
        };
        return fetch(`${config.API_ENDPOINT}/game/upcoming`, options)
            .then(res =>
                (!res.ok) ?
                res.json().then(e => Promise.reject(e)) : res.json());
    },
    patchUpcoming(url, updatedGame) {
        const { id, title, date, game_type } = updatedGame;
        const options = {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ id, title, date, game_type })
        };
        return fetch(url, options)
    },
    deleteGame(url, id) {
        const options = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        };
        return fetch(url, options)
    }
};
export default GameApiService;