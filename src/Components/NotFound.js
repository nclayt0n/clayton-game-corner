import React from 'react';
import Header from './Header';

class NotFound extends React.Component {
    render() {
        return ( 
            <>
                <Header/>
                <section className = 'notFoundPage' >
                    <h2> 404 - Page not found </h2> 
                    <p> Try returning to previous page. </p> 
                </section>
            </>
        )
    }
}
export default NotFound;