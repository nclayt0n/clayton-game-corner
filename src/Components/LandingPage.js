import React from 'react';
import {Switch} from 'react-router-dom';
import TabletopGameReview from './TabletopGameReviews';
import VideoGameReview from './VideoGameReview';
import UpcomingGameList from './UpcomingGameList';
import NotFound from './NotFound.js';
import logo from '../images/largelogo.png'

class LandingPage extends React.Component{
    
    render(){
        return(
            <div> 
                <Switch>
                    <section>
                        <div className='logoContainer'><img src={logo} alt='clayton game corrin big logo'/>
                        </div>
                        <p>Welcome! My name is Corrin and I have a love for video games! Tabletop, Xbox, Card, Playstation, PC, Switch, DS, etc. You name it, I've either played it or plan on it. This site was created so I could share my experience and opinions of games I've played. Enjoy, and happy gaming! </p>
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
export default LandingPage;