import React from 'react';
import Review from './Review';
import {withRouter} from 'react-router-dom'
import Pagination from './Pagination';
import Nav from './Nav';
import Header from './Header';
import GameApiService from '../services/game-api-services';
import config from '../config';
import Context from '../Context';
import ValidationError from '../Validation/ValidationError';

class TabletopGameReview extends React.Component{
    static contextType=Context;
    constructor(){
        super()
        this.state={
            error:'',
            page:0,
            pageLimit:10
        };
    }
    componentDidMount(){
        GameApiService.getApiCall(`${config.API_ENDPOINT}/game/review/tabletop?limit=${this.state.pageLimit}&offset=${this.state.page*this.state.pageLimit}`)
        .then((reviews) => {
                    this.context.addReviews(reviews);
                })
                .catch(error => {
                    this.setState({ error });
                });
    }
    setPage=(page)=>{
        this.setState({page:page})
        GameApiService.getApiCall(`${config.API_ENDPOINT}/game/review/tabletop?limit=${this.state.pageLimit}&offset=${page*this.state.pageLimit}`)
        .then((reviews) => {
                    this.context.addReviews(reviews);
                })
                .catch(error => {
                    this.setState({ error });
                })
    }
    render(){
        return(
        <>
        <Header/>
        <Nav/>
           <h2>Tabletop Game Review</h2>
           {this.context.reviews.map(review=>{
                    return <Review key={review.id} review={review}/>
                })}
                <ValidationError errorMessage={this.state.error}/>
                <Pagination 
                    page={this.state.page} 
                    pageLimit={this.state.pageLimit} 
                    setPage={(page)=>this.setPage(page)} 
                    items={this.context.reviews}/>
        </>)
    }
}
export default withRouter(TabletopGameReview);