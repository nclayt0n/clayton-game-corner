import React from 'react';
import AdminUpcomingGame from './AdminUpcomingGame';
import {withRouter} from 'react-router-dom';
import Pagination from '../Components/Pagination';
import Header from '../Components/Header';
import ValidationError from '../Validation/ValidationError';
import Context from '../Context';
import config from '../config';
import GameApiService from '../services/game-api-services';
const uuidv4=require('uuid');

class AdminUpcomingGameList extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            error:'',
            page:0,
            pageLimit:12
        };
    }
    componentDidMount(){
        GameApiService.getApiCall(`${config.API_ENDPOINT}/admin/game/upcoming?limit=${this.state.pageLimit}&offset=${this.state.page*this.state.pageLimit}`)
        .then((games) => {
                    this.context.addUpcomingGames(games);
                })
                .catch(error => {
                    this.setState({ error:error.message });
                });
    }
    
    addGame=(e)=>{
        e.preventDefault();
        let title=e.target.title.value;
        let date=e.target.date.value;
        let game_type=e.target.game_type.value;
        if(date.length===0){
            this.setState({error:'Must include a game date'});
        }
        if(title.length===0){
            this.setState({error:'Must include a game title'});
        }
        if(game_type.length===0){
            this.setState({error:'Must choose a game type'});
        }if(date.length>0&&title.length>0&&game_type.length>0){
            this.setState({error:''})
            GameApiService.postUpcoming(date,game_type,title)
                .then((game) => {
                    this.context.addUpcomingGame(game); 
                })
                .catch(error => {
                    this.setState({ error:error.message });
                });
        }
    }
    setPage(page){
        this.setState({page:page});
        GameApiService.getApiCall(`${config.API_ENDPOINT}/admin/game/upcoming?limit=${this.state.pageLimit}&offset=${page*this.state.pageLimit}`)
        .then((games) => {
                    this.context.addUpcomingGames(games);
                })
                .catch(error => {
                    this.setState({ error });
                })
    }
    render(){
        return(
        <>
        <Header/>
            <section className='admin-add-upcoming-game' key={uuidv4()}>
                <form onSubmit={(e)=>this.addGame(e,this.context)}>
                    <fieldset>
                        <legend>Add Upcoming Game</legend>
                            <input name='date' type="date"/>
                            <br/>
                            <input placeholder='title' name='title' type="text"/>

                        <br/>
                        <select name='game_type'>
                            <option value=''>Game Type:</option>
                            <option value='video'>Video</option>
                            <option value='tabletop'>Tabletop</option>
                        </select>
                    </fieldset>
                    <button type='submit' aria-label='submit-add-game-review'>Add Game</button>
                </form>
                <ValidationError errorMessage={this.state.error}/>
            </section>
            {this.context.upcomingGames.length===0?null:
            <div id='admin-upcoming-header'>
                <h3>Upcoming Games</h3>
                <div className='horizontal-line'></div>
            </div>}
            <div id='admin-upcoming-game-list' 
                 style={{justifyContent: this.context.upcomingGames.length<4 ? 'center':'left'}}>
            {this.context.upcomingGames.map(game=>{
                return <AdminUpcomingGame key={game.id} game={game}/>
            })}
            </div>
            {this.context.upcomingGames.length===0
                ?<section className='none-to-display'>
                    <p>No Upcoming Games to be displayed</p>
                </section>
                :<Pagination 
                    page={this.state.page} 
                    pageLimit={this.state.pageLimit} 
                    setPage={(page)=>this.setPage(page)} 
                    items={this.context.upcomingGames}/>
            }
        </>)
    }
}
export default withRouter(AdminUpcomingGameList);