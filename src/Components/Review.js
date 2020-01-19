import React from 'react';
const uuidv4 = require('uuid/v4');

class Review extends React.Component {
    render() {
        return (
            <article key={uuidv4} className='review-info'>
                <h4>{this.props.review.title}</h4>
                <div className='review'>
                    <p >{this.props.review.review}</p>
                    <br />
                    <p className='review-date-created' style={{ textAlign: 'right', fontSize: '12px', marginRight: '10px', marginBottom: '-20px' }}>{this.props.review.date_created}</p>
                </div>
                {this.props.review.link.length === 0 ? null :

                    <p>
                        <a href={this.props.review.link} target='_blank' rel='noopener noreferrer'>Buy</a>
                    </p>}

            </article>)
    }
}
export default Review;