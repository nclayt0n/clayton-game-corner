import React from 'react';

class AdminReview extends React.Component{
    render(){
        return(
        <>
            <section>
                <form>
                    <label> Title: 
                        <input type="text" placeholder='Portal'/>
                    </label>
                    <label>Images:<br/>
                        <input type="text" placeholder='/images/portal.jpg' />
                    </label>
                    <label>Review:<br/>
                        <textarea placeholder= 'Portal was a super awesome game' >
                        </textarea>
                    </label>
                    <label>Link to Buy:
                        <input type='url' placeholder="https://www.amazon.com/Portal-PC/dp/B00140P9G0" target="_blank"/>
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
                    <label> Title: 
                        <input type="text" placeholder='Splendor'/>
                    </label>
                    <label>Images:<br/>
                        <input type="text" placeholder='/images/BoardGameSplendor.jpg' />
                    </label>
                    <label>Review:<br/>
                        <textarea placeholder= 'Splendor was a super awesome game' ></textarea>
                    </label>
                    <label>Link to Buy:
                        <input type='url' placeholder='https://www.amazon.com/Asmodee-SPL01-Splendor/dp/B00IZEUFIA'/>
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
export default AdminReview;