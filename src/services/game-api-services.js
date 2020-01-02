import config from '../config';
import TokenService from './token-service';
import Context from '../Context';
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
    getAllReviews() {
        let options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        return fetch(`${config.API_ENDPOINT}/api/game/review`, options)
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
                .then(([reviews]) => {
                    this.context.addReview(reviews);
                })
                .catch(error => {
                    console.error({ error });
                }));
    },
    getAllVideoGameReviews() {
        let options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        return fetch(`${config.API_ENDPOINT}/api/game/review/video`, options)
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
                .then(([reviews]) => {
                    this.context.addReview(reviews);
                })
                .catch(error => {
                    console.error({ error });
                }));
    },
    getAllTabletopReviews() {
        let options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        };
        return fetch(`${config.API_ENDPOINT}/api/game/review/tabletop`, options)
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            );
    }
};
export default GameApiService;