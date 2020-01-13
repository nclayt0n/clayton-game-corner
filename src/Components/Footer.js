import React from 'react';

class Footer extends React.Component{
    render(){
        return(
        <footer>
            <ul>
                <li id='siteName'>Clayton Game Corner</li>
                <li id='siteEmail'>
                    <address>
                        <a href='mailto:claytongamecorner@gmail.com'>Contact</a>
                    </address>
                </li>
            </ul>
        </footer>
        )
    }
}
export default Footer;