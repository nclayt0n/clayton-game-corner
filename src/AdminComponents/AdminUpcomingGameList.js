import React from 'react';
import AdminUpcomingGame from './AdminUpcomingGame';
import Pagination from '../Components/Pagination';

class AdminUpcomingGameList extends React.Component{
    render(){
        return(
        <>
         <h2>Add Upcoming Game</h2>
            <section>
                <form>
                    <label>Date: 
                        <input type="date"/></label>
                    <label>Title:<input type="text"/></label>
                    <select>
                        <option >Type</option>
                        <option value='video'>Video</option>
                        <option value='tabletop'>Tabletop</option>
                    </select>
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