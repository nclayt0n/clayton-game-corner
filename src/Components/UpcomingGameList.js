import React from 'react';
import UpcomingGameInfo from './UpcomingGameInfo';

class UpcomingGameList extends React.Component{
    render(){
        return(
        <article>
            <h3>Upcoming Games</h3>
            <UpcomingGameInfo/>
        </article>)
    }
}
export default UpcomingGameList;