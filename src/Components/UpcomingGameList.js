import React from 'react';
import UpcomingGameInfo from './UpcomingGameInfo';
import Pagination from './Pagination';
import Nav from './Nav';
import Header from './Header';
import GameApiService from '../services/game-api-services';
import config from '../config';
import Context from '../Context';
import ValidationError from '../Validation/ValidationError';
const uuidv4=require('uuid');


class UpcomingGameList extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            error:'',
            page:0,
            pageLimit:30
        };
    }
    componentDidMount(){
        GameApiService.getApiCall(`${config.API_ENDPOINT}/game/upcoming?limit=${this.state.pageLimit}&offset=.GF${this.state.page*this.state.pageLimit}`)
        .then((games) => {
                    this.context.addUpcomingGames(games);
                })
                .catch(error => {
                    this.setState({ error });
                });
    }
    setPage=(page)=>{
        this.setState({page:page})
        GameApiService.getApiCall(`${config.API_ENDPOINT}/game/upcoming?limit=${this.state.pageLimit}&offset=${page*this.state.pageLimit}`)
        .then((games) => {
                    this.context.addUpcomingGames(games);
                })
                .catch(error => {
                    this.setState({ error });
                })
    }
    render(){
        return(<>
        <Header/>
        <Nav/>
        <article key={uuidv4()}>
            <h3>Upcoming Games</h3>
            {this.context.upcomingGames.map(game=>{
                    return <UpcomingGameInfo 
                                key={game.id} 
                                game={game}/>
                })}
        </article>
        <ValidationError errorMessage={this.state.error}/>
        <Pagination 
            page={this.state.page} 
            pageLimit={this.state.pageLimit} 
            setPage={(page)=>this.setPage(page)} 
            items={this.context.upcomingGames}/>
        </>)
    }
}
export default UpcomingGameList;