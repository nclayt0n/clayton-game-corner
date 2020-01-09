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
    postReview(formData) {
        console.log(formData)
        let options = {
            method: 'POST',
            body: formData,
            // data: form,
        };
        return fetch(`${config.API_ENDPOINT}/game/review`, options)
            .then(res =>
                (!res.ok) ?
                res.json().then(e => Promise.reject(e)) : res.json());
    },
    patchReviewW(url, formData) {
        console.log(url, formData)
        let options = {
            method: 'PATCH',
            body: formData,
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
        };
        return fetch(url, options)
            .then(res =>
                (!res.ok) ?
                res.json().then(e => Promise.reject(e)) : res.json());
    },
    postUpcoming(date, game_type, title) {
        let options = {
            method: 'PATCH',
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