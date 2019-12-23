import React from 'react';
import {Switch} from 'react-router-dom';
import TabletopGameReview from './TabletopGameReviews';
import VideoGameReview from './VideoGameReview';
import UpcomingGame from './UpcomingGame';
import NotFound from './NotFound.js';

class LandingPage extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Switch>
                    <TabletopGameReview/>
                    <VideoGameReview/>
                    <UpcomingGame/>
                    <NotFound/>
                </Switch>
            </div>
        )
    }
}
export default LandingPage;