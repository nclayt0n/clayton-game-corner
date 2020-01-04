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
            <Nav/>
                    <section>
                        <div className='logoContainer'><img src={logo} alt='clayton game corrin big logo'/>
                        </div>
                        <p>{this.context.bio}</p>
                    </section>
                    <section>
                        <p>
                        To get to and test: 
<Link to="/admin">Click Admin Login Page</Link> and you will be routed to the admin login page where email and password will be required. Test credentials will be on page.
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