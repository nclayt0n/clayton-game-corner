import React from 'react'
import {Link,withRouter} from 'react-router-dom';
import Context from '../Context';
import TokenService from '../services/token-service';
import MediaQuery from 'react-responsive';
class Nav extends React.Component{
    static contextType=Context;
    state={
        clicked:false
    }
    handleLogoutClick = () => {
        return TokenService.clearAuthToken();
    }
    render(){
        console.log(this.state.clicked)
        return(
        <>
        <MediaQuery maxWidth={650}>
          <nav className='nav-main'>
            <button  
                type='button'
                className='btn-toggle-nav'
                onClick={()=>this.state.clicked===false?this.setState({clicked:true}):this.setState({clicked:false})}
                >
            </button>
        </nav>  
        </MediaQuery>
        {this.state.clicked===false
        ?null:
        <aside className='nav-links-container'>
            <ul className='nav-links'>
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
                ?
                <ul className='admin-links-container'>
                    {this.props.history.location.pathname==='/admin'
                ?null
                :<li>
                    <Link to={`/admin`}>
                        Admin
                    </Link>
                </li>}
                {this.props.history.location.pathname==='/admin/game/review-list'
                ?null
                :<li>
                    <Link to={'/admin/game/review-list'}>
                       Game Review
                    </Link>
                </li>}
                {this.props.history.location.pathname==='/admin/game/upcoming-list'
                ?null
                :<li >
                    <Link to={'/admin/game/upcoming-list'}>
                        Upcoming Games
                    </Link>
                </li>}
                <li>
                    <Link 
                        to='/' 
                        onClick={this.handleLogoutClick}>
                        Logout
                    </Link>
                </li>
                    
                </ul>:null}
            </ul> 
        </aside>}
        </>
        )
    
}}
export default withRouter(Nav);