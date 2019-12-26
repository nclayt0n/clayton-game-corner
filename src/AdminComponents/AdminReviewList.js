import React from 'react';
import AdminReview from './AdminReview';
import Pagination from '../Components/Pagination';
import { Receiver, UploadManager,UploadHandler } from 'react-file-uploader';
import ReactDOM from 'react-dom';

import DropzoneComponent from 'react-dropzone-component';
import '../../node_modules/dropzone/dist/min/dropzone.min.css';
let ReactDOMServer = require('react-dom/server');
class AdminReviewList extends React.Component{
    
    render(){
        var myDropzone;

function initCallback (dropzone) {
    myDropzone = dropzone;
}

function removeFile () {
    if (myDropzone) {
        myDropzone.removeFile();
    }
}
        let componentConfig = { postUrl: '/uploadHandler' };
        let djsConfig = { autoProcessQueue: false,addRemoveLinks: true, maxfilesexceeded: 5,maxfilesreached: 5, };
        let eventHandlers = { 
            maxfilesexceeded: 5,maxfilesreached: 5, addedfile: (file) => console.log(file) };
        return(
        <>
            <section>
                <form>
                <fieldset>
                    <legend>Add Game Review</legend>
                    <label>Title: 
                        <input type="text"/>
                    </label><br/>
                    <label>Review: <br/>
                        <textarea placeholder='add review here'></textarea>
                    </label><br/>
                    <label>Link to Buy: 
                        <input type="url"/>
                    </label><br/>
                    <select>
                        <option >Type</option>
                        <option value='video'>Video</option>
                        <option value='tabletop'>Tabletop</option>
                    </select>
                    <fieldset>
                        <legend> Images (max. 5):</legend>
                            <DropzoneComponent 
                                config={componentConfig}
                                eventHandlers={eventHandlers}
                                djsConfig={djsConfig} />
                                <button data-dz-remove >Cancel</button>
                        
                    </fieldset>
                </fieldset>
                </form>
                <button>Add Review</button>
            </section>
            

            {/* <Receiver
                customClass={'addReview'}
                isOpen={true}
                // onDragEnter={FUNCTION}
                // onDragOver={FUNCTION}
                // onDragLeave={FUNCTION}
                // onFileDrop={FUNCTION}
            >
                <div className='droppable'>
                    visual layer of the receiver (drag & drop panel)
                </div>
            </Receiver> */}

            <h2>Review List</h2>
            <AdminReview/> 
            <Pagination/>
        </>)
    }
}
export default AdminReviewList;