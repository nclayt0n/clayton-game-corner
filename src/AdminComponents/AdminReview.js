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
            formData:''
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
    onSubmit=(e,id)=>{
        e.preventDefault();
        
        let formData= new FormData();
        
        let title=e.target.title.value;
        let review=e.target.review.value;
        let game_type=e.target.game_type.value;
        let link=e.target.link.value;
        let picture;
        
        formData={
            "title":title,
            "review":review,
            "game_type":game_type,
            "link":link,
        }
        this.state.clicked===true
        ?formData={
            "title":title,
            "review":review,
            "game_type":game_type,
            "link":link,
            "picture":this.state.picture
        }:formData={
            "title":title,
            "review":review,
            "game_type":game_type,
            "link":link,
        };
        // formData.title=title;
        // formData.review=review;
        // formData.game_type=game_type;
        // formData.link=link;
        // formData.picture=picture;
        console.log(formData)
        if(review.length===0){
            this.setState({error:'Must include a game review'});
        }
        if(title.length===0){
            this.setState({error:'Must include a game title'});
        }
        if(review.length>0&&title.length>0&&game_type.length>0){
            this.setState({error:''});
            this.setState({formData})
            GameApiService.patchReview(`${config.API_ENDPOINT}/game/review/${id}`,formData)
                .then((updatedReview) => {
                    this.context.updateReview(updatedReview);
                    this.props.history.push('/admin/');
                })
                .catch(error => {
                    this.setState({ error:error.message });
                });
        }
    }
    // onSubmit(e,id,context){
    //     e.preventDefault();
    //     console.log(this.props.picture)
    //     let updatedReview={
    //         id,
    //         title:e.target.title.value,
    //         game_type:e.target.game_type.value,
    //         link:e.target.link.value,
    //         picture:this.state.picture,
    //         review:e.target.review.value
    //     };
    //     GameApiService.patchReview(`${config.API_ENDPOINT}/game/review/${id}`,updatedReview)
    //         .then(res=>context.updateReview(res))
    //             .catch(error =>{
    //                 this.setState({error:error.message});
    //             });
    // }
handleOnclick=()=>{
    this.state.clicked===false?
    this.setState({clicked:true}):this.setState({clicked:false})
}
    render(){
        console.log(this.state)
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
            </section>
            }</>
            )
    }
}
export default withRouter(AdminReview);