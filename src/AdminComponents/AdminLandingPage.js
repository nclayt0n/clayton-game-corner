import React from 'react';
import {withRouter} from 'react-router-dom';
import logo from '../images/largelogo.png';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Context from '../Context';
import GameApiService from '../services/game-api-services';
import config from '../config';

class AdminLandingPage extends React.Component{
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
            <Header/>
                <Nav/>
                    <section>
                        <form>
                            <textarea defaultValue={this.context.bio}>
                            
                            </textarea>
                            <button type='button'>Update</button>
                        </form>
                    </section>
            </div>
        )
    }
}
export default withRouter(AdminLandingPage);