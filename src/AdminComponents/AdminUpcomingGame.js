import React from 'react';
import {withRouter} from 'react-router-dom';
import GameApiService from '../services/game-api-services';
import config from '../config';
import Context from '../Context';
import ValidationError from '../Validation/ValidationError';

class AdminUpcomingGame extends React.Component{
    static contextType=Context;
    constructor(props){
        super()
        this.state={
            error:'',
            game:props.game
        };
    }
    
    onDelete(id,context){
        GameApiService.deleteGame(`${config.API_ENDPOINT}/game/upcoming/${id}`)
            .then(context.deleteUpcomingGame(id))
                .catch(error =>{
                 this.setState({error:error.message});
                });
    }
    onSubmit(e,id,context){
        e.preventDefault();
        let date;
        let title;
        (e.target.title.value.length===0)?title=this.props.game.title:title=e.target.title.value;
        (e.target.newGameDate.value.length===0)?date=this.props.game.date:date=e.target.newGameDate.value;
        let updatedGame={
            id,
            title:title,
            game_type:e.target.game_type.value,
            date
        };
        GameApiService.patchUpcoming(`${config.API_ENDPOINT}/game/upcoming/${id}`,updatedGame)
            .then(context.updateUpcomingGame(updatedGame))
                .catch(error =>{
                    this.setState({error:error.message});
                });
    }
    render(){
        return(
       <section key={this.props.game.id} className='admin-upcoming-game-info'>
                <form key={this.props.game.id} onSubmit={(e)=>this.onSubmit(e,this.props.game.id,this.context)}>
                    <legend>{this.state.game.date}: {this.state.game.title}  </legend><br/>
                        <input type='date' name='newGameDate'/><br/>
                        <input type='text' name='title' placeholder='new title'/>
                        <select name='game_type'>
                            <option value={this.props.game.game_type}>{this.props.game.game_type}</option>
                            <option value={this.props.game.game_type==='video'?'tabletop':'video'}>{this.props.game.game_type==='video'?'tabletop':'video'}</option>
                        </select>
                    <button type='submit'>Update</button>
                    <button type='button' onClick={()=>this.onDelete(this.props.game.id,this.context)}>Delete</button>
                </form>
                
                
                <ValidationError errorMessage={this.state.error}/>
            </section>)
    }
}
export default withRouter(AdminUpcomingGame);