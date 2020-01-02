import React from 'react';
import {withRouter} from 'react-router-dom';
import GameApiService from '../services/game-api-services';
import config from '../config';
import Context from '../Context';

class AdminUpcomingGame extends React.Component{
    static contextType=Context;
    constructor(props){
        super()
        this.state={
            game:props.game
        };
    }
    onDelete(id,context){
        console.log(id)
        GameApiService.deleteUpcoming(`${config.API_ENDPOINT}/api/game/upcoming/${id}`)
            .then(context.deleteUpcomingGame(id))
                .catch(error =>{
                 this.setState({error});
                });
            this.props.history.push('/game/upcoming');
    }
    onSubmit(e,id,context){
        e.preventDefault();
        let date;
        (e.target.newGameDate.value.length===0)?date=this.props.game.date:date=e.target.newGameDate.value;
        let updatedGame={
            id,
            title:e.target.title.value,
            game_type:e.target.game_type.value,
            date
        };
        GameApiService.patchUpcoming(`${config.API_ENDPOINT}/api/game/upcoming/${id}`,updatedGame)
            .then(context.updateUpcomingGame(updatedGame))
                .catch(error =>{
                    this.setState({error});
                });
            this.props.history.push('/game/upcoming');
}
    render(){
        return(
       <section key={this.props.game.id}>
                <form key={this.props.game.id} onSubmit={(e)=>this.onSubmit(e,this.props.game.id,this.context)}>
                    <label htmlFor='gameDate' > Release Date: <input name='gameDate' type='text' value={this.state.game.date} readOnly/><br/>    
                    </label>
                    <label htmlFor='newGameDate'>New Date:
                        <input type="date" name='newGameDate'/>
                    </label>
                    <label htmlFor='title'>Title:
                        <input type="text" name='title' defaultValue={this.props.game.title}/>
                    </label>
                    <label htmlFor='game_type'> Game Type: 
                        <select name='game_type'>
                            <option value={this.props.game.game_type}>{this.props.game.game_type}</option>
                            <option value={this.props.game.game_type==='video'?'tabletop':'video'}>{this.props.game.game_type==='video'?'tabletop':'video'}</option>
                        </select>
                    </label>
                    <button type='submit'>Update</button>
                </form>
                
                <button type='button' onClick={()=>this.onDelete(this.props.game.id,this.context)}>Delete</button>
            </section>)
    }
}
export default withRouter(AdminUpcomingGame);