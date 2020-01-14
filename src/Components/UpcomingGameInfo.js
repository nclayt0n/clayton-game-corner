import React from 'react';
import MediaQuery from 'react-responsive';
class UpcomingGameInfo extends React.Component{
    render(){
        return(
        <section className='upcoming-game-info-container'>
            <ul className='upcoming-game-info'>
                <li className='game-date'>{this.props.game.date}</li> 
                <li className='game-title'> {this.props.game.title} </li>
                <br/>
                <li className='horizontal-line'></li>
                <br/><li className='game-type'> {this.props.game.game_type}</li>
            </ul>
        </section>)
    }
}
export default UpcomingGameInfo;