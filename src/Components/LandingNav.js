import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import Context from '../Context';
import TokenService from '../services/token-service';
import MediaQuery from 'react-responsive';

class LandingNav extends React.Component{
    static contextType=Context;
    handleLogoutClick = () => {
        return TokenService.clearAuthToken();
    }
    render(){
        return(
            <nav className='landing-nav-container'>
            <ul id='landing-nav-links'>
            {(this.props.history.location.pathname==='/')
                ?(null)
                :(<li>
                    <Link to={`/`}>
                        Home
                    </Link>
                </li>)}
                {this.props.history.location.pathname==='/game/review/video'
                ?null
                :<li>
                    <Link to={'/game/review/video'}>
                        Video Game Review
                    </Link>
                </li>}
                {this.props.history.location.pathname==='/game/review/          tabletop'
                ?null
                :<li>
                    <Link to={'/game/review/tabletop'}>
                        Tabletop Game Review
                    </Link>
                </li>}
                {this.props.history.location.pathname==='/game/upcoming'
                ?null
                :<li>
                    <Link to={'/game/upcoming'}>
                        Upcoming Games        
                    </Link>
                </li>}
                {this.context.user_id>0
                ?
                <ul className='landing-admin-links-container'>
                    <li id='landing-admin-folder'>
                            Admin
                    </li>{this.props.history.location.pathname==='/admin'
                    ?null
                    :<li >
                        <Link to={`/admin`}>
                            Home
                        </Link>
                    </li>}
                    {this.props.history.location.pathname==='/admin/game/review-list'
                    ?null
                    :<li className='landing-admin-links'>
                        <Link to={'/admin/game/review-list'}>
                        Game Review
                        </Link>
                    </li>}
                    {this.props.history.location.pathname==='/admin/game/upcoming-list'
                    ?null
                    :<li className='landing-admin-links'>
                        <Link to={'/admin/game/upcoming-list'}>
                            Upcoming Games
                        </Link>
                    </li>}
                    <li className='landing-admin-links'>
                        <Link 
                            to='/' 
                            onClick={this.handleLogoutClick}>
                            Logout
                        </Link>
                    </li>
                </ul>:null}
            </ul> 
        </nav>
        )
    }
}
export default withRouter(LandingNav);