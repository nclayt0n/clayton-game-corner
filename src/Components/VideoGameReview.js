import React from 'react';
import Review from './Review';
import Pagination from './Pagination';
import Nav from './Nav';
import Header from './Header';
import GameApiService from '../services/game-api-services';
import Context from '../Context';

class VideoGameReview extends React.Component{
    render(){
        return(
            <><Header/>
            <Nav/>
                <h2>Video Game Review</h2>
                <Review/>
                <Pagination/>
            </>)
    }
}
export default VideoGameReview;