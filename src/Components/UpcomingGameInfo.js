import React from 'react';

class UpcomingGameInfo extends React.Component{
    render(){
        return(
        <ul>
            <li>{this.props.game.date} - {this.props.game.title} - {this.props.game.game_type}</li>
        </ul>)
    }
}
export default UpcomingGameInfo;