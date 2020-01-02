import React from 'react';
import Review from './Review';
import {withRouter} from 'react-router-dom';
import Pagination from './Pagination';
import Nav from './Nav';
import Header from './Header';
import GameApiService from '../services/game-api-services';
import Context from '../Context';

class VideoGameReview extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            reviews:[],
        };
    }
    componentDidMount(){
        GameApiService.getAllVideoGameReviews()
        .then(([reviews]) => {
                    this.context.addReviews(reviews);
                    this.setState({reviews})
                })
                .catch(error => {
                    console.error({ error });
                });
    }
    render(){
        return(
            <><Header/>
            <Nav/>
                <h2>Video Game Review</h2>
                {this.context.reviews.map(review=>{
                    return <Review review={review}/>
                })}
                
                <Pagination/>
            </>)
    }
}
export default withRouter(VideoGameReview);