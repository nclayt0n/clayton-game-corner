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
    onUpdate(e,id,context){
        e.preventDefault();

        let updatedReview={
            id,
            title:e.target.title.value,
            game_type:e.target.game_type.value,
            link:e.target.link.value,
            picture:'',
            review:e.target.review.value
        };
        if(updatedReview.review.length>3000){
            this.setState({error:'Max characters 3000'});
        }if(updatedReview.review.length<=3000){
            GameApiService.patchReview(`${config.API_ENDPOINT}/game/review/${id}`,updatedReview)
            .then(res=>context.updateReview(updatedReview))
                .catch(error =>{
                    this.setState({error:error.message});
                });  
        }
      
    }
    render(){
        return(
            <section key={this.props.review.id} className='admin-game-info'>
                <form key={this.props.review.id} onSubmit={(e)=>this.onUpdate(e,this.props.review.id,this.context)}>
                    <fieldset>
                    <input name='title' type="text" defaultValue={this.props.review.title} placeholder='title'/>
                    <br/>
                    <textarea name='review' defaultValue= {this.props.review.review} placeholder='add review...'></textarea>
                    <input name='link' type='url' defaultValue={this.props.review.link} placeholder='link to buy'/><br/>
                        <select name='game_type'>
                            <option value={this.props.review.game_type}>{this.props.review.game_type}</option>
                            <option value={this.props.review.game_type==='video'?'tabletop':'video'}>{this.props.review.game_type==='video'?'tabletop':'video'}</option>
                        </select>
                        </fieldset>
                    <button type='submit'>Update</button>
                    <button type='button' onClick={()=>this.onDelete(this.props.review.id,this.context)}>Delete</button>
                </form>
                
                <ValidationError errorMessage={this.state.error}/>
            </section>
            )
    }
}
export default withRouter(AdminReview);