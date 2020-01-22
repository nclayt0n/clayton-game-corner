import React from 'react';
import {withRouter} from 'react-router-dom';
import logo from '../images/largelogo.png';
import Nav from '../Components/Nav';
import Context from '../Context';
import GameApiService from '../services/game-api-services';
import config from '../config';
import LandingNav from '../Components/LandingNav';
import MediaQuery from 'react-responsive';

class AdminLandingPage extends React.Component{
    static contextType=Context;
    componentDidMount(){
        GameApiService.getApiCall(`${config.API_ENDPOINT}/users/1`)
        .then(([user]) => {
                    this.context.addBio(user.bio);
                })
                .catch(error => {
                    this.setState({ error:error.message });
                });
    }
    updateBio(e){
        e.preventDefault();
        let bio=e.target.bio.value;
        const options = {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ bio })
        };
        fetch(`${config.API_ENDPOINT}/users/1`, options)
        .then(this.context.updateBio(bio))
        .then(this.props.history.push('/'))
                .catch(error =>{
                    this.setState({error:error.message});
                });
    }
    render(){
        return(
            <>
                
                    <section 
                            key='adminLandingSection' className='landing-page-header'>
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
                    <section className='admin-landing-page-bio'>
                       <form onSubmit={(e)=>this.updateBio(e)}>
                            <textarea name='bio' defaultValue={this.context.bio}>
                            </textarea>
                            <button type='submit' aria-label='submit-update-user-bio' >Update</button>
                        </form> 
                    </section>
            </>
        )
    }
}
export default withRouter(AdminLandingPage);