import React from 'react'
import {Link,withRouter} from 'react-router-dom';
import Context from '../Context';
import TokenService from '../services/token-service';
class Nav extends React.Component{
    static contextType=Context;
    handleLogoutClick = () => {
        return TokenService.clearAuthToken();
    };
    render(){
        return(
        <>
        <nav className='nav-main'>
            <button  
                type='button'
                className='btn-toggle-nav'>
            </button>
        </nav>
        <aside className='nav-sidebar'>
            <ul className='navPageLinks'>
                <li>
                    <Link to={`/`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/game/review/video'}>
                        Video Game Review
                    </Link>
                </li>
                <li>
                    <Link to={'/game/review/tabletop'}>
                        Tabletop Game Review
                    </Link>
                </li>
                <li>
                    <Link to={'/game/upcoming'}>
                        Upcoming Game        
                    </Link>
                </li>
                {this.context.user_id>0
                ?<>
                <li>
                    <Link to={`/admin`}>
                        Admin Home
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/game/review-list'}>
                       Admin Game Review
                    </Link>
                </li>
                <li>
                    <Link to={'/admin/game/upcoming-list'}>
                        Admin Upcoming Game
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/' 
                        onClick={this.handleLogoutClick}>
                        Logout
                    </Link>
                </li>
                </>
                :null}
            </ul> 
        </aside>
        </>
        )
    
}}
export default withRouter(Nav);