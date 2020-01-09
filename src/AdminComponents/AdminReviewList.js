import React from 'react';
import AdminReview from './AdminReview';
import Pagination from '../Components/Pagination';
import {withRouter} from 'react-router-dom';
import { Receiver, UploadManager,UploadHandler } from 'react-file-uploader';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';
import '../../node_modules/dropzone/dist/min/dropzone.min.css';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import config from '../config';
import GameApiService from '../services/game-api-services';
import Context from '../Context';
import ValidationError from '../Validation/ValidationError';
let ReactDOMServer = require('react-dom/server');
const uuidv4=require('uuid');

class AdminReviewList extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            error:'',
            page:0,
            pageLimit:10
        };
    }
    componentDidMount(){
        GameApiService.getApiCall(`${config.API_ENDPOINT}/game/review?limit=${this.state.pageLimit}&offset=${this.state.page*this.state.pageLimit}`)
        .then((reviews) => {
                    this.context.addReviews(reviews);
                })
                .catch(error => {
                    this.setState({ error });
                });
    }
    addReview=(e)=>{
        e.preventDefault();
        let title=e.target.title.value;
        let review=e.target.review.value;
        let game_type=e.target.game_type.value;
        let link=e.target.link.value;
        let picture='';
       
        if(review.length===0){
            this.setState({error:'Must include a game review'});
        }
        if(title.length===0){
            this.setState({error:'Must include a game title'});
        }
        if(game_type.length===0){
            this.setState({error:'Must choose a game type'});
        }if(review.length>0&&title.length>0&&game_type.length>0){
            this.setState({error:''});
            GameApiService.postReview(title,game_type,link,picture, review)
                .then((newReview) => {
                    this.context.addReview(newReview); this.props.history.push('/admin/game/review-list');
                })
                .catch(error => {
                    this.setState({ error:error.message });
                });
        }
    }
    setPage=(page)=>{
        this.setState({page:page})
        GameApiService.getApiCall(`${config.API_ENDPOINT}/game/review/tabletop?limit=${this.state.pageLimit}&offset=${page*this.state.pageLimit}`)
        .then((reviews) => {
                    this.context.addReviews(reviews);
                })
                .catch(error => {
                    this.setState({ error });
                });
    };
    render(){
      
        return(
        <>
        <Header/>
        <Nav/>
            <section key={uuidv4()}>
                <form onSubmit={(e)=>this.addReview(e,this.context)}>
                <fieldset>
                    <legend>Add Game Review
                    </legend>
                    <label htmlFor='title'>Title: 
                        <input name='title' type="text"/>
                    </label><br/>
                    <label htmlFor='review'>Review: <br/>
                        <textarea placeholder='add review here' name='review'></textarea>
                    </label><br/>
                    <label htmlFor='link'>Link to Buy: 
                        <input name='link' type="url"/>
                    </label><br/>
                    <select name='game_type'>
                        <option value=''>Game Type:</option>
                        <option value='video'>Video</option>
                        <option value='tabletop'>Tabletop</option>
                    </select>
                    <fieldset>
                        <legend> Images (max. 5):</legend>
                    </fieldset>
                </fieldset> 
                <button type='submit'>Add Review</button>
                </form>
                <ValidationError errorMessage={this.state.error}/>
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
            {this.context.reviews.map(review=>{
                    return <AdminReview key={review.id} review={review}/>
            })}
            {this.context.reviews.length===0
                ?<section>
                    <p>No Reviews to be displayed</p>
                </section>
                :<Pagination 
                    page={this.state.page} 
                    pageLimit={this.state.pageLimit} 
                    setPage={(page)=>this.setPage(page)} 
                    items={this.context.reviews}/>
            }
           
        </>)
    }
}
export default withRouter(AdminReviewList);