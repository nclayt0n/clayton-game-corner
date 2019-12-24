import React from 'react';
import UpcomingGameInfo from './UpcomingGameInfo';
import Pagination from './Pagination';

class UpcomingGameList extends React.Component{
    render(){
        return(<>
        <article>
            <h3>Upcoming Games</h3>
            <UpcomingGameInfo/>
        </article>
        <Pagination/>
        </>)
    }
}
export default UpcomingGameList;