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
            error:'',
            picture:'',
            originalPicture:props.review.picture,
            clicked:false,
            id:props.review.id,
            res:'',
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
    onSubmit=(e)=>{
        e.preventDefault();
        
        let title=e.target.title.value;
        let review=e.target.review.value;
        let game_type=e.target.game_type.value;
        let link=e.target.link.value;
        let picture;
        
        if(review.length===0){
            this.setState({error:'Must include a game review'});
        }
        if(title.length===0){
            this.setState({error:'Must include a game title'});
        }
        if(this.state.clicked===true&&review.length>0&&title.length>0&&game_type.length>0){
            picture=this.state.picture;
            let formData= new FormData()
        formData.append("title", e.target.title.value);
        formData.append("review", e.target.review.value);
        formData.append("game_type", game_type);
        formData.append("link", link);
        formData.append("picture",picture);
        formData.append("originalPicture",this.state.originalPicture);
        this.setState({error:''});
            GameApiService.patchReviewW(`${config.API_ENDPOINT}/game/review/${this.props.review.id}`,formData)
                .then((updatedReview) => {
                    this.context.updateReview(updatedReview);
                    this.props.history.push('/admin/');
                })
                .catch(error => {
                    this.setState({ error:error.message });
                });

        }if(this.state.clicked===false&&review.length>0&&title.length>0&&game_type.length>0){

            picture=this.state.originalPicture;
            let updatedReview= new FormData()
            updatedReview.append("title",  e.target.title.value);
            updatedReview.append("review", e.target.review.value);
            updatedReview.append("game_type", game_type);
            updatedReview.append("link",link);
            this.setState({error:''});
            GameApiService.patchReviewW(`${config.API_ENDPOINT}/game/review/${this.props.review.id}`,updatedReview)
            .then(res=>this.setState({res}))
                .catch(error =>{
                    this.setState({error:error.message});
                });
        }
       
    }
handleOnclick=()=>{
    this.state.clicked===false?
    this.setState({clicked:true}):this.setState({clicked:false});
};
    render(){
        return(<>
            {this.state.id<0?'':
            <section key={this.props.review.id}>
                <form key={this.props.review.id} onSubmit={(e)=>this.onSubmit(e,this.props.review.id,this.context)}>
                    <label htmlFor='title'> Title: </label>
                        <input name='title' type="text" defaultValue={this.props.review.title}/>
                    <label htmlFor='review'>Review:</label>
                        <textarea name='review' defaultValue= {this.props.review.review}>
                        </textarea><br/>
                    <label htmlFor='link'>Link to Buy: </label>
                        <input name='link' type='url' defaultValue={this.props.review.link}/>
                    

                    <label htmlFor='game_type'> Game Type: 
                        <select name='game_type'>
                            <option value={this.props.review.game_type}>{this.props.review.game_type}</option>
                            <option value={this.props.review.game_type==='video'?'tabletop':'video'}>{this.props.review.game_type==='video'?'tabletop':'video'}</option>
                        </select>
                    </label>
                    {this.state.clicked
                    ?<button type='button' onClick={()=>this.handleOnclick()} >Cancel Image Deletion</button>
                    :<button type='button' onClick={()=>this.handleOnclick()} >Remove Image</button>}
                    <img name='image' src={`${config.API_ENDPOINT}/${this.props.review.picture}`} alt={this.props.review.picture} hidden={this.state.clicked}/>
                    {this.state.clicked===false?null:
                    <><label htmlFor="image" >
                                {this.state.clicked===true
                                ?'Click me to upload File image'
                                :`Click to change image ${this.state.picture}`}
                        </label>     
                            <input 
                                type="file" 
                                name="uploadfile" 
                                id="image" 
                                style={{display:'none'}} 
                                onChange={(e)=>this.setState({picture:e.target.files[0]})}/></>}
                    <button type='submit'>Update</button>
                </form>
                <button type='button' onClick={()=>this.onDelete(this.props.review.id,this.context)}>Delete</button>
                <ValidationError errorMessage={this.state.error}/>
                {this.state.res.length===0?null:<div className='res' style={{  transitionTimingFunction: 'ease'}}>{this.state.res}</div>}
            </section>
            }</>
            )
    }
}
export default withRouter(AdminReview);