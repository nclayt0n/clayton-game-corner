import React from 'react';
import fillerImage from '../images/githubicon.png';

class Review extends React.Component{
    // createImages(review){
    //     return JSON.parse(review.picture).map((pic,idx)=>{
    //         return <img src={pic} key={idx} alt={`images from the game ${review.title}`}/>
    //     });
    // }
    render(){
        // let pics=this.createImages(this.props.review);
        return(
           <article>
                <h3>{this.props.review.title}</h3>
                <div>
                    {/* {pics} */}
                </div>
                <p>{this.props.review.review}
                </p>
                <p>
                    <a href={this.props.review.link} target='_blank' rel='noopener noreferrer'>Buy</a>
                </p>
            </article>)
    }
}
export default Review;