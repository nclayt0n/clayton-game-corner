import React from 'react';
import { withRouter } from 'react-router-dom';

class UpcomingGameInfo extends React.Component{
    render(){
        return(
        <ul>
            <li>{this.props.game.date} - {this.props.game.title} - {this.props.game.game_type}</li>
        </ul>)
    }
}
export default withRouter(UpcomingGameInfo);