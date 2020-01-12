import React from 'react';
import {withRouter,Route,Link} from 'react-router-dom';
import TabletopGameReview from './TabletopGameReviews';
import VideoGameReview from './VideoGameReview';
import UpcomingGameList from './UpcomingGameList';
import Nav from './Nav';
import logo from '../images/largelogo.png';
import Context from '../Context';
import GameApiService from '../services/game-api-services';
import config from '../config';
import LandingNav from './LandingNav';
import MediaQuery from 'react-responsive';

class LandingPage extends React.Component{
    static contextType=Context;
    componentDidMount(){
        GameApiService.getApiCall(`${config.API_ENDPOINT}/users/2`)
        .then(([user]) => {
            this.context.addBio(user.bio);
        })
        .catch(error => {
            this.setState({ error });
        });
    }
    render(){
        return(
            <> 
            
                    <section className='landing-page-header'>
                        <div className='logo-container'>
                            <img src={logo} alt='clayton game corrin big logo'/>
                        </div>
                    </section>
                     <MediaQuery maxWidth={700}>
                        <Nav/>
                     </MediaQuery>  
                    <MediaQuery minWidth={701}>
                        <LandingNav/>
                    </MediaQuery>
                    <section className='landing-page-bio'>
                        <p>{this.context.bio}</p>
                    </section>
                    <section className='landing-page-header test-instructions'>
                        <p>
                        To get to and demo Admin Click: <br/>
                        <Link to="/admin">Admin Login Page</Link><br/> 
                        You will then be routed to the admin login page where email and password will be required. For demostration purposes credentials will be on login page.
                        </p>
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
                   
            </>
        )
    }
}
export default LandingPage;