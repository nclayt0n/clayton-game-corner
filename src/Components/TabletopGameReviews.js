import React from 'react';
import Review from './Review';
import Pagination from './Pagination';
import Header from './Header';
import GameApiService from '../services/game-api-services';
import config from '../config';
import Context from '../Context';
import ValidationError from '../Validation/ValidationError';
const uuidv4 = require('uuid/v4');

class TabletopGameReview extends React.Component {
    static contextType = Context;
    constructor() {
        super()
        this.state = {
            error: '',
            page: 0,
            pageLimit: 10
        };
    }
    componentDidMount() {
        GameApiService.getApiCall(`${config.API_ENDPOINT}/game/review/tabletop?limit=${this.state.pageLimit}&offset=${this.state.page * this.state.pageLimit}`)
            .then((reviews) => {
                this.context.addReviews(reviews);
            })
            .catch(error => {
                this.setState({ error });
            });
    }
    setPage(page) {
        this.setState({ page: page });

        GameApiService.getApiCall(`${config.API_ENDPOINT}/game/review/tabletop?limit=${this.state.pageLimit}&offset=${page * this.state.pageLimit}`)
            .then((reviews) => {

                this.context.addReviews(reviews);
            })
            .catch(error => {
                this.setState({ error });
            });
    }
    render() {
        return (
            <>
                <Header />
                <section className='review-list'>
                    {this.context.reviews.length === 0 ? null :
                        <div className='review-list-header'>
                            <h3>Tabletop Game Review</h3>
                            <div className='horizontal-line'>
                            </div>
                        </div>}
                    {this.context.reviews.map(review => {
                        return <Review key={uuidv4()} review={review} />
                    })}
                    <ValidationError errorMessage={this.state.error} />
                </section>
                {this.context.reviews.length === 0
                    ? <section className='none-to-display'>
                        <p>No Reviews to be displayed</p>
                    </section>
                    : <Pagination
                        page={this.state.page}
                        pageLimit={this.state.pageLimit}
                        setPage={(page) => this.setPage(page)}
                        items={this.context.reviews} />
                }
            </>)
    }
}
export default TabletopGameReview;