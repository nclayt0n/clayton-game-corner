import React from 'react';
import {withRouter} from 'react-router-dom';
import logo from '../images/smallCGCLogo.png';
class Header extends React.Component{
    render(){
        return(
        <>
            {(this.props.location.pathname==='/')
                ?''
                :(<header>
                    <img id='headerLogo'src={logo} alt='clayton game corner logo'/>
                </header>)
            }
        </>)
    }
}
export default withRouter(Header);