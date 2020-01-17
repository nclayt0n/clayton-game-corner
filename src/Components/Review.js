import React from 'react';
const uuidv4 = require('uuid/v4');

class Review extends React.Component{
    render(){
        return(
           <article key={uuidv4} className='review-info'>
                <h4>{this.props.review.title}</h4>
                <p className='review'>{this.props.review.review}
                </p>
                { this.props.review.link.length===0?null:
            
                <p>
                    <a href={this.props.review.link} target='_blank' rel='noopener noreferrer'>Buy</a>
                </p>}
            </article>)
    }
}
export default Review;