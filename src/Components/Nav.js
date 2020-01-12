import React from 'react'
import {Link,withRouter} from 'react-router-dom';
import Context from '../Context';
import TokenService from '../services/token-service';

import MediaQuery from 'react-responsive';
import navImage from '../images/white_menu_icon.png';
import cancelNavImage from '../images/close-icon-13577.png';
class Nav extends React.Component{
    static contextType=Context;
    state={
        clicked:false,
        image:navImage,
        backgroundSize:'100%'
    }
    handleLogoutClick = () => {
        return TokenService.clearAuthToken();
    }
    handleOnclick=()=>{
       if(this.state.clicked===false){
           this.setState({
               clicked:true,
               image:cancelNavImage,
               backgroundSize:'60%'
            });
        }else{
            this.setState({
                clicked:false,
                image:navImage,
                backgroundSize:'100%'
            });
        }
    };
    render(){
        let buttonStyling={
            height: '50px',
            width: '50px',
            position: 'fixed',
            top: '30px',
            right: '50px',
            transitionTimingFunction: 'ease-in',
            transition:'.2s',
            backgroundImage: `url(${this.state.image})`,backgroundRepeat: 'no-repeat',
            backgroundSize: `${this.state.backgroundSize}`,
            backgroundPosition: 'center',
            border: 'none'
        };
        return(
        <>
        <MediaQuery maxWidth={700}>
          <nav className='nav-main'>
            <button  
                style={buttonStyling}
                type='button'
                className='btn-toggle-nav'
                onClick={()=>this.handleOnclick()}
                >
            </button>
        </nav>  
        {
        this.state.clicked===false
            ?null
            :<aside className='nav-links-container'>
                <ul className='nav-links'>
                {
                    (this.props.history.location.pathname==='/')
                    ?(null)
                    :(<li>
                        <Link to={`/`}>
                            Home
                        </Link>
                    </li>)
                }
                {
                    this.props.history.location.pathname==='/game/review/video'
                    ?null
                    :<li>
                        <Link to={'/game/review/video'}>
                            Video Game Review
                        </Link>
                    </li>
                }
                {
                    this.props.history.location.pathname==='/game/review/tabletop'
                    ?null
                    :<li>
                        <Link to={'/game/review/tabletop'}>
                            Tabletop Game Review
                        </Link>
                    </li>
                }
                {
                    this.props.history.location.pathname==='/game/upcoming'
                    ?null
                    :<li>
                        <Link to={'/game/upcoming'}>
                            Upcoming Games        
                        </Link>
                    </li>
                }
                {
                    this.context.user_id>0
                    ?<ul className='admin-nav-links'>
                        <li id='admin-folder'>
                            Admin
                        </li>
                        {
                            this.props.history.location.pathname==='/admin'
                            ?null
                            :<li>
                                <Link to={`/admin`}>
                                    Home
                                </Link>
                            </li>
                        }
                        {
                            this.props.history.location.pathname==='/admin/game/review-list'
                            ?null
                            :<li>
                                <Link to={'/admin/game/review-list'}>
                                    Game Review
                                </Link>
                            </li>
                        }
                        {
                            this.props.history.location.pathname==='/admin/game/upcoming-list'
                            ?null
                            :<li >
                                <Link to={'/admin/game/upcoming-list'}>
                                    Upcoming Games
                                </Link>
                            </li>
                        }
                        <li>
                            <Link 
                                to='/' 
                                onClick={this.handleLogoutClick}>
                                Logout
                            </Link>
                        </li>  
                    </ul>
                    :null
                }
                </ul> 
            </aside>
        }
        </MediaQuery>
        <MediaQuery minWidth={701}> 
        <nav className='nav-links-container'>
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
                <ul className='admin-nav-links'>
                    <li id='admin-folder'>
                            Admin
                    </li>
                    {this.props.history.location.pathname==='/admin'
                    ?null
                    :<li>
                        <Link to={`/admin`}>
                            Home
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
                            onClick=   {this.handleLogoutClick}>
                            Logout
                        </Link>
                    </li>  
                </ul>
                :null}
            </ul> 
        </nav>

        </MediaQuery>
        </>
        )
    
    }
}
export default withRouter(Nav);