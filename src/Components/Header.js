import React from 'react';
import logo from '../images/smallCGCLogo.png';
import Nav from './Nav';
class Header extends React.Component{
    render(){
        return(
        <>
            <header>
                <img id='headerLogo'src={logo} alt='clayton game corner logo'/>
            </header>
            <Nav/>
        </>)
    }
}
export default Header;