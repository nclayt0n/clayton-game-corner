import React from 'react';
import AdminUpcomingGame from './AdminUpcomingGame';
import {withRouter} from 'react-router-dom';
import Pagination from '../Components/Pagination';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import ValidationError from '../Validation/ValidationError';
import Context from '../Context';
import config from '../config';
import GameApiService from '../services/game-api-services';
class AdminUpcomingGameList extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            error:''
        };
    }
    componentDidMount(){
        GameApiService.getApiCall(`${config.API_ENDPOINT}/api/admin/game/upcoming`)
        .then((games) => {
                    this.context.addUpcomingGames(games);
                })
                .catch(error => {
                    this.setState({ error });
                });
    }
    render(){
        return(
        <>
        <Header/>
        <Nav/>
            <section>
                <form>
                    <fieldset>
                        <legend>Add Upcoming Game</legend>
                        <label>Date: 
                            <input type="date"/>
                        </label>
                        <br/>
                        <label>Title:
                            <input type="text"/>
                        </label>
                        <br/>
                        <select>
                            <option >Type</option>
                            <option value='video'>Video</option>
                            <option value='tabletop'>Tabletop</option>
                        </select>
                    </fieldset>
                </form>
                <button>Add Game</button>
            </section>
            <h2>Upcoming Game List</h2>
            <AdminUpcomingGame/> 
            <ValidationError/>
            <Pagination/>
        </>)
    }
}
export default withRouter(AdminUpcomingGameList);