import React from 'react';

class UpcomingGameInfo extends React.Component{
    render(){
        return(
        <ul className='upcoming-game-info'>
            <li className='game-date'>{this.props.game.date}</li> 
            <li className='game-title'> {this.props.game.title} </li>
            <li className='game-type'> {this.props.game.game_type}</li>
        </ul>)
    }
}
export default UpcomingGameInfo;