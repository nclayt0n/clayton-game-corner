import React from 'react';
import AdminReview from './AdminReview';

class AdminReviewList extends React.Component{
    render(){
        return(
        <>
            <h2>Add Game Review</h2>
            <section>
                <form>
                    <label>Title: 
                        <input type="text"/></label>
                    <label>Review: <br/>
                        <textarea placeholder='add review here'></textarea>
                    </label>
                    <label>Link to Buy: 
                        <input type="url"/>
                    </label>
                    <select>
                        <option >Type</option>
                        <option value='video'>Video</option>
                        <option value='tabletop'>Tabletop</option>
                    </select>
                </form>
                <button>Add Review</button>
            </section>

            <h2>Review List</h2>
            <AdminReview/> 
        </>)
    }
}
export default AdminReviewList;