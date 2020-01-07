import React from 'react';
import AdminReview from './AdminReview';
import Pagination from '../Components/Pagination';
import {withRouter} from 'react-router-dom';
import '../../node_modules/dropzone/dist/min/dropzone.min.css';
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import config from '../config';
import GameApiService from '../services/game-api-services';
import Context from '../Context';
import ValidationError from '../Validation/ValidationError';
const uuidv4=require('uuid');

class AdminReviewList extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            error:'',
            page:0,
            pageLimit:10,
            file:[],
            id:0,
            picture:'',
            selectedFile:'',
        };
    }
    componentDidMount(){
        GameApiService.getApiCall(`${config.API_ENDPOINT}/game/review?limit=${this.state.pageLimit}&offset=${this.state.page*this.state.pageLimit}`)
                .then((reviews) => {
                    if(reviews.ok){
                     this.context.addReviews(reviews);   
                    }
                })
                .catch(error => {
                    this.setState({ error });
                });
    }
    addReview=(e)=>{
        e.preventDefault();
        let formData= new FormData();
        
        let title=e.target.title.value;
        let review=e.target.review.value;
        let game_type=e.target.game_type.value;
        let link=e.target.link.value;
        let picture=this.state.picture;
        let picName=picture.name
        formData.append("title", JSON.stringify(title));
        formData.append("review", JSON.stringify(review));
        formData.append("game_type", JSON.stringify(game_type));
        formData.append("link", JSON.stringify(link));
        formData.append("picture",picName)
        console.log(formData)
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
            GameApiService.postReview(formData)
                .then((newReview) => {
                    console.log(newReview)
                    this.state.addReview(newReview); 
                    this.setState({id:newReview.id,selectedFile:''})
                    this.props.history.push('/admin/game/review-list');
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
                    this.context.addReviews(reviews)
                })
                .catch(error => {
                    this.setState({ error });
                });
    };
   
    fileSelectedHandler= (event) => {
        
        let file=event.target.files[0];
        this.setState({selectedFile:file});

    };
    handleChange(e) {
        console.log(e.target)
      let getInputValue = e.target.value;
      console.log(getInputValue)
    //   this.setState({
    //     postVal :getInputValue
    //   });
}
    render(){ 
        return(
        <>
        <Header/>
        <Nav/>
            <section key={uuidv4()}>
                <form id='addReview' onSubmit={(e)=>this.addReview(e)}>
                    <fieldset >
                        <legend>Add Game Review</legend>
                        
                        <label htmlFor='title'>Title: </label>
                            <input name='title' type="text"/>
                        <br/>
                        <label htmlFor='review'>Review: <br/></label>
                            <textarea 
                                className='review'
                                placeholder='add review here' 
                                name='review'></textarea>
                        <br/>
                        <label htmlFor='link'>Link to Buy:</label>
                            <input name='link' type="url"/><br/>
                        <select name='game_type'>
                            <option value=''>Game Type:</option>
                            <option value='video'>Video</option>
                            <option value='tabletop'>Tabletop</option>
                        </select><br/>  
                        <label htmlFor="picture" >
                                {this.state.picture.length===0
                                ?'Click me to upload File image'
                                :`Click to change ${this.state.picture.name}`}
                        </label>     
                            <input 
                                type="file" 
                                name="uploadfile" 
                                id="picture" 
                                style={{display:'none'}} 
                                onChange={(e)=>this.setState({picture:e.target.files[0]})}/>
                            
                    </fieldset> 
                    <button type='submit'>Add Review</button>
                </form>
                <ValidationError errorMessage={this.state.error}/>
            </section>

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