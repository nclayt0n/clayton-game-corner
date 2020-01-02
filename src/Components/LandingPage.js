import React from 'react';
import {Switch,withRouter} from 'react-router-dom';
import TabletopGameReview from './TabletopGameReviews';
import VideoGameReview from './VideoGameReview';
import UpcomingGameList from './UpcomingGameList';
import Header from './Header';
import Nav from './Nav';
import NotFound from './NotFound.js';
import logo from '../images/largelogo.png';
import Context from '../Context';

class LandingPage extends React.Component{
    static contextType=Context;
    render(){
        return(
            <div> 
            <Nav/>
                <Switch>
                    <section>
                        <div className='logoContainer'><img src={logo} alt='clayton game corrin big logo'/>
                        </div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                    </section>
                    <TabletopGameReview/>
                    <VideoGameReview/>
                    <UpcomingGameList/>
                    <NotFound/>
                </Switch>
            </div>
        )
    }
}
export default withRouter(LandingPage);