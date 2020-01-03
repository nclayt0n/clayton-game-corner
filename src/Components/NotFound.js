import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class NotFound extends React.Component {
    render() {
        return ( 
            <>
                <Header/>
                <section className = 'notFoundPage' >
                    <h2> 404 - Page not found </h2> 
                    <p> Try going back to your previous page. </p> 
                </section>
            </>
        )
    }
}
export default withRouter(NotFound)