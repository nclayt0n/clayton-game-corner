import React from 'react';
import Review from './Review';
import {withRouter} from 'react-router-dom';
import Pagination from './Pagination';
import Nav from './Nav';
import Header from './Header';
import GameApiService from '../services/game-api-services';
import config from '../config';
import Context from '../Context';
import ValidationError from '../Validation/ValidationError';
const uuidv4 = require('uuid/v4');

class VideoGameReview extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            error:''
        };
    }
    componentDidMount(){
        GameApiService.getReviews(`${config.API_ENDPOINT}/api/game/review/video`)
        .then((reviews) => {
                    this.context.addReviews(reviews);
                })
                .catch(error => {
                    this.setState({ error });
                });
    }
    render(){
        return(
            <><Header/>
            <Nav/>
                <h2>Video Game Review</h2>
                {this.context.reviews.map(review=>{
                    return <Review key={review.id} review={review}/>
                })}
                <ValidationError errorMessage={this.state.error}/>
                <Pagination/>
            </>)
    }
}
export default withRouter(VideoGameReview);