import React from 'react'
import {Link,withRouter} from 'react-router-dom';
import Context from '../Context';
import TokenService from '../services/token-service';
import MediaQuery from 'react-responsive'
class Nav extends React.Component{
    static contextType=Context;
    handleLogoutClick = () => {
        return TokenService.clearAuthToken();
    }
    render(){
        return(
        <>
        <MediaQuery maxWidth={600}>
          <nav className='nav-main'>
            <button  
                type='button'
                className='btn-toggle-nav'>
            </button>
        </nav>  
        </MediaQuery>
        
        <aside className='nav-link-container'>
            <ul className='navPageLinks'>
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
                {this.props.history.location.pathname==='/game/review/tabletop'
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
                ?<>
                {this.props.history.location.pathname==='/admin'
                ?null
                :<li>
                    <Link to={`/admin`}>
                        Admin Home
                    </Link>
                </li>}
                {this.props.history.location.pathname==='/admin/game/review-list'
                ?null
                :<li>
                    <Link to={'/admin/game/review-list'}>
                       Admin Game Review
                    </Link>
                </li>}
                {this.props.history.location.pathname==='/admin/game/upcoming-list'
                ?null
                :<li>
                    <Link to={'/admin/game/upcoming-list'}>
                        Admin Upcoming Games
                    </Link>
                </li>}
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