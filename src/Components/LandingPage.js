import React from 'react';
import {Switch,withRouter,Route} from 'react-router-dom';
import TabletopGameReview from './TabletopGameReviews';
import VideoGameReview from './VideoGameReview';
import UpcomingGameList from './UpcomingGameList';
import Nav from './Nav';
import NotFound from './NotFound.js';
import logo from '../images/largelogo.png';
import Context from '../Context';
import GameApiService from '../services/game-api-services';
import config from '../config';

class LandingPage extends React.Component{
    static contextType=Context;
    componentDidMount(){
        GameApiService.getApiCall(`${config.API_ENDPOINT}/users/1`)
        .then(([user]) => {
                    this.context.addBio(user.bio);
                })
                .catch(error => {
                    this.setState({ error });
                });
    }
    render(){
        return(
            <div> 
            <Nav/>
                    <section>
                        <div className='logoContainer'><img src={logo} alt='clayton game corrin big logo'/>
                        </div>
                        <p>{this.context.bio} </p>
                    </section>
                    <Route 
                        path='/game/review/tabletop' 
                        component={TabletopGameReview}/>
                    <Route 
                        path='/game/review/video' 
                        component={VideoGameReview}/>
                    <Route 
                        exact path='/game/upcoming' 
                        component={UpcomingGameList}/>
                   
            </div>
        )
    }
}
export default withRouter(LandingPage);