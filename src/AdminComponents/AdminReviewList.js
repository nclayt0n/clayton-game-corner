import React from 'react';
import AdminReview from './AdminReview';
import Pagination from '../Components/Pagination';
import { Receiver, UploadManager,UploadHandler } from 'react-file-uploader';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';
import '../../node_modules/dropzone/dist/min/dropzone.min.css';

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
        let djsConfig = { autoProcessQueue: false };
        let eventHandlers = { addedfile: (file) => console.log(file) };
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
            <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />
                       <img src="/removebutton.png" alt="Click me to remove the file." data-dz-remove />

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