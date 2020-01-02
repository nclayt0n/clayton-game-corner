import React from 'react';
import UpcomingGameInfo from './UpcomingGameInfo';
import Pagination from './Pagination';
import Nav from './Nav';
import Header from './Header';

class UpcomingGameList extends React.Component{
    render(){
        return(<>
        <Header/>
        <Nav/>
        <article>
            <h3>Upcoming Games</h3>
            <UpcomingGameInfo/>
        </article>
        <Pagination/>
        </>)
    }
}
export default UpcomingGameList;