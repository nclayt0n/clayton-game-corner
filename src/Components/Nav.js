import React from 'react'
import {Link,withRouter} from 'react-router-dom';

class Nav extends React.Component{
    constructor(){
        super()
        this.state={
            clicked:false
        };
    }
    // navStyles=()=>{
    //     if(this.state.clicked===false){this.setState({clicked:true});
    // }
    //     if(this.state.clicked===true){this.setState({clicked:false});
    // }
    // };
    
    render(){
        return(
        <>
        {/* <nav className='nav-main'>
            <button  
                type='button'
                className='btn-toggle-nav'></button>
        </nav> */}
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
            </ul> 
        </aside>
        </>
        )
    
}}
export default withRouter(Nav)