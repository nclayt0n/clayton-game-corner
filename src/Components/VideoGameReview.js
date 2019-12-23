import React from 'react';
import Review from './Review';

class VideoGameReview extends React.Component{
    render(){
        return(
            <>
                <h2>Tabletop Game Review</h2>
                <Review/>
            </>)
    }
}
export default VideoGameReview;