import React from 'react';
import AdminUpcomingGame from './AdminUpcomingGame';
import Pagination from '../Components/Pagination';
import Nav from '../Components/Nav';
import Header from '../Components/Header';

class AdminUpcomingGameList extends React.Component{
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
            <Pagination/>
        </>)
    }
}
export default AdminUpcomingGameList;