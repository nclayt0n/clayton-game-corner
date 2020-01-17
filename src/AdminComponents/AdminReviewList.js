import React from 'react';
import AdminReview from './AdminReview';
import Pagination from '../Components/Pagination';
import {withRouter} from 'react-router-dom';
import '../../node_modules/dropzone/dist/min/dropzone.min.css';
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
        if(review.length>3000){
            this.setState({error:'Max characters is 3000'});
        }
        if(title.length===0){
            this.setState({error:'Must include a game title'});
        }
        if(game_type.length===0){
            this.setState({error:'Must choose a game type'});
        }if(review.length>0&&title.length>0&&game_type.length>0&&review.length<=3000){
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
            <section key={uuidv4()} className='admin-add-game-review'>
                <form onSubmit={(e)=>this.addReview(e,this.context)}>
                <fieldset>
                    <legend>Add Game Review
                    </legend>
                        <input name='title' type='text' placeholder='title'/>
                    <br/>
                        <textarea placeholder='add review...' name='review'></textarea>
                    <br/>
                        <input name='link' type='url' placeholder='link to buy'/>
                    <br/>
                    <select name='game_type'>
                        <option value=''>Game Type:</option>
                        <option value='video'>Video</option>
                        <option value='tabletop'>Tabletop</option>
                    </select>
                </fieldset> 
                <button type='submit'>Add Review</button>
                </form>
                <ValidationError errorMessage={this.state.error}/>
            </section>

            {this.context.reviews.length===0?null:
            <div id='admin-review-header'>
                <h3>Reviews</h3>
                <div className='horizontal-line'></div>
            </div>}
            <div id='admin-game-review-list'>
                {this.context.reviews.map(review=>{
                    return <AdminReview key={review.id} review={review}/>
                })}
            </div>
            {this.context.reviews.length===0
                ?<section className='none-to-display'>
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