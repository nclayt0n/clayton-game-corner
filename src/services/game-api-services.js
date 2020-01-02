import config from '../config';
const GameApiService = {
    postReview(title, game_type, link, picture, review) {
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ title, game_type, link, picture, review }),
        };
        return fetch(`${config.API_ENDPOINT}/api/game/review`, options)
            .then(res =>
                (!res.ok) ?
                res.json().then(e => Promise.reject(e)) : res.json());
    },
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
            );
    },
    postUpcoming(title, game_type, date) {
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ title, game_type, date }),
        };
        return fetch(`${config.API_ENDPOINT}/api/game/upcoming`, options)
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
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json());
    },
    deleteUpcoming(url, id) {
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