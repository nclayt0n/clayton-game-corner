import React from 'react';
const uuidv4 = require('uuid/v4');

class Review extends React.Component{
    // createImages(review){
    //     return JSON.parse(review.picture).map((pic,idx)=>{
    //         return <img src={pic} key={idx} alt={`images from the game ${review.title}`}/>
    //     });
    // }
    render(){
        // let pics=this.createImages(this.props.review);
        return(
           <article key={uuidv4} className='review-info'>
                <h4>{this.props.review.title}</h4>
                <p className='review'>{this.props.review.review}
                </p>
                <p>
                    <a href={this.props.review.link} target='_blank' rel='noopener noreferrer'>Buy</a>
                </p>
            </article>)
    }
}
export default Review;