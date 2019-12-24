import React from 'react';

class AdminUpcomingGame extends React.Component{
    render(){
        return(
        <>
       <section>
                <form>
                    <label>Date: 
                        <input type="date" placeholder='04/01/2020'/>
                    </label>
                    <label>Title:
                        <input type="text" placeholder="Final Fantasy Crystal Chronicles"/>
                    </label>
                    <select>
                        <option >Type</option>
                        <option value='video'>Video</option>
                        <option value='tabletop'>Tabletop</option>
                    </select>
                </form>
                <button>Update</button>
                <button>Delete</button>
            </section>
            <section>
                <form>
                    <label>Date: 
                        <input type="date" placeholder='02/25/2020'/>
                    </label>
                    <label>Title:
                        <input type="text" placeholder="Gods and Monsters"/>
                    </label>
                    <select>
                            <option >Type</option>
                            <option value='video'>Video</option>
                            <option value='tabletop'>Tabletop</option>
                    </select>
                </form>
                <button>Update</button>
                <button>Delete</button>
            </section>  
        </>)
    }
}
export default AdminUpcomingGame;