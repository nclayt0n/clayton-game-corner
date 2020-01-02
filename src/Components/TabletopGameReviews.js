import React from 'react';
import Review from './Review';
import {withRouter} from 'react-router-dom'
import Pagination from './Pagination';
import Nav from './Nav';
import Header from './Header';
import GameApiService from '../services/game-api-services';
import Context from '../Context';

class TabletopGameReview extends React.Component{
    static contextType=Context;
    componentDidMount(){
        GameApiService.getAllTabletopReviews()
        .then(([reviews]) => {
                    this.context.addReviews(reviews);
                })
                .catch(error => {
                    console.error({ error });
                });
    }
    render(){
        console.log(this.context)
        return(
       <>
        <Header/>
        <Nav/>
           <h2>Tabletop Game Review</h2>
                <Review/>
                <Pagination/>
       </>)
    }
}
export default withRouter(TabletopGameReview);