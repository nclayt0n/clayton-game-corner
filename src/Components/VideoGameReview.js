import React from 'react';
import Review from './Review';
import Pagination from './Pagination';

class VideoGameReview extends React.Component{
    render(){
        return(
            <>
                <h2>Video Game Review</h2>
                <Review/>
                <Pagination/>
            </>)
    }
}
export default VideoGameReview;