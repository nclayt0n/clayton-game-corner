import React from 'react';
import Context from '../Context';
import {withRouter} from 'react-router-dom';
import GameApiService from '../services/game-api-services';
import config from '../config';
import ValidationError from '../Validation/ValidationError';

class AdminReview extends React.Component{
    static contextType=Context;
    constructor(props){
        super()
        this.state={
            error:''
        };
    }
    
    onDelete(id,context){
        GameApiService.deleteGame(`${config.API_ENDPOINT}/game/review/${id}`)
            .then(context.deleteReview(id))
                .catch(error =>{
                 this.setState({error:error.message});
                });
            this.props.history.push('/admin/game/review-list');
    }
    onSubmit(e,id,context){
        e.preventDefault();

        let updatedReview={
            id,
            title:e.target.title.value,
            game_type:e.target.game_type.value,
            link:e.target.link.value,
            picture:'',
            review:e.target.review.value
        };
        GameApiService.patchReview(`${config.API_ENDPOINT}/game/review/${id}`,updatedReview)
            .then(res=>context.updateReview(res))
                .catch(error =>{
                    this.setState({error:error.message});
                });
    }
    render(){
        return(
            <section key={this.props.review.id}>
                <form key={this.props.review.id} onSubmit={(e)=>this.onSubmit(e,this.props.review.id,this.context)}>
                    <label htmlFor='title'> Title: </label>
                        <input name='title' type="text" defaultValue={this.props.review.title}/>
                    <label htmlFor='review'>Review:</label>
                        <textarea name='review' defaultValue= {this.props.review.review}>
                        </textarea><br/>
                    <label htmlFor='link'>Link to Buy: </label>
                        <input name='link' type='url' defaultValue={this.props.review.link}/>
                    <img src={`${config.API_ENDPOINT}/${this.props.review.picture}`} alt={this.props.review.picture}/>
                    <label htmlFor='game_type'> Game Type: 
                        <select name='game_type'>
                            <option value={this.props.review.game_type}>{this.props.review.game_type}</option>
                            <option value={this.props.review.game_type==='video'?'tabletop':'video'}>{this.props.review.game_type==='video'?'tabletop':'video'}</option>
                        </select>
                    </label>
                    <button type='submit'>Update</button>
                </form>
                <button type='button' onClick={()=>this.onDelete(this.props.review.id,this.context)}>Delete</button>
                <ValidationError errorMessage={this.state.error}/>
            </section>
            )
    }
}
export default withRouter(AdminReview);