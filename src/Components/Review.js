import React from 'react';
import fillerImage from '../images/githubicon.png';

class Review extends React.Component{
    render(){
        return(
           <article>
                <h3>Splendor</h3>
                <div>
                    <img src={fillerImage} alt='cover art'/>
                </div>
                <p>Splendor was a super awesome game 
                </p>
                <p>
                    <a href='https://www.amazon.com/Asmodee-SPL01-Splendor/dp/B00IZEUFIA' target='_blank' rel='noopener noreferrer'>Buy</a>
                </p>
            </article>)
    }
}
export default Review;