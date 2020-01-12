import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import Context from './Context';
import LandingPage from './Components/LandingPage';
import PrivateRoute from './Utils/PrivateRoute';
import TabletopGameReview from './Components/TabletopGameReviews';
import VideoGameReview from './Components/VideoGameReview';
import UpcomingGameList from './Components/UpcomingGameList';
import './App.css';
import NotFound from './Components/NotFound';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import UpcomingGameInfo from './Components/UpcomingGameInfo';
import AdminLandingPage from './AdminComponents/AdminLandingPage';
import AdminReviewList from './AdminComponents/AdminReviewList';
import AdminLogin from './AdminComponents/AdminLogin';
import AdminUpcomingGameList from './AdminComponents/AdminUpcomingGameList';
import TokenService from './services/token-service'

class App extends React.Component {
  constructor(){
    super()
      this.state={
          user_id:0,
          reviews:[],
          bio:'',
          upcomingGames:[],
      };
    }
  handleAddReviews=(reviews)=>{
    this.setState({
      reviews:[...reviews]
    })
  }
  handleAddReview=(newReview)=>{
    this.setState({
      reviews:[...this.state.reviews,newReview]
    })
  }
  handleDeleteReview=(id)=>{
    this.setState({
            reviews: this.state.reviews.filter(review => review.id !== id)
        });
  }
  handleUpdateReview=(updatedReview)=>{
    this.setState({
        reviews:[...this.state.reviews.filter(review=>review.id!==updatedReview.id),updatedReview]
    });
    this.props.history.push('/admin');
  };
  handleAddUpcomings=(upcomingGames)=>{
    this.setState({
      upcomingGames:[...upcomingGames]
    });
  };
  handleAddUpcoming=(upcomingGame)=>{
    this.setState({
      upcomingGames:[...this.state.upcomingGames,upcomingGame]
    });
  };
  handleAddBio=(bio)=>{
    this.setState({
      bio:bio
    });
  };
  handleUpdateBio=(bio)=>{
    this.setState({
      bio:bio
    });
  };
  handleUpdateUpcomingGame=(updatedUpcomingGame)=>{
    this.setState({
        upcomingGames:[...this.state.upcomingGames.filter(game=>game.id!==updatedUpcomingGame.id),updatedUpcomingGame]
    });
    this.props.history.push('/game/upcoming');
  };
  handleDeleteUpcomingGame=(id)=>{
    this.setState({
            upcomingGames: this.state.upcomingGames.filter(game => game.id !== id)
        });
  };
  render(){
    let userId;
    (TokenService.getAuthToken()===null)?userId=0
      :userId=TokenService.decodeAuthToken(TokenService.getAuthToken());
    
    const contextValue={
      user_id:userId,
      bio:this.state.bio,
      upcomingGames:this.state.upcomingGames,
      reviews:this.state.reviews,
      addReviews:this.handleAddReviews,
      addReview:this.handleAddReview,
      updateReview:this.handleUpdateReview,
      deleteReview:this.handleDeleteReview,
      addUpcomingGames:this.handleAddUpcomings,
      addBio:this.handleAddBio,
      updateBio:this.handleUpdateBio,
      updateUpcomingGame:this.handleUpdateUpcomingGame,
      deleteUpcomingGame:this.handleDeleteUpcomingGame,
      addUpcomingGame:this.handleAddUpcoming,
    };
  return (
    <main className='App'>
        <Context.Provider value={contextValue}>
        <Switch>
          <Route 
            exact path='/' 
            component={LandingPage}/>
          <Route 
            path='/game/review/tabletop' 
            component={TabletopGameReview}/>
          <Route 
            path='/game/review/video' 
            component={VideoGameReview}/>
          <Route 
            exact path='/game/upcoming' 
            component={UpcomingGameList}/>
          <Route 
            path='/game/upcoming/info' 
            component={UpcomingGameInfo}/>
          <Route 
            path='/nav' 
            component={Nav}/>
          <PrivateRoute 
            exact path='/admin' 
            component={AdminLandingPage}/>
          <PrivateRoute 
            path='/admin/game/review-list' 
            component={AdminReviewList}/>
          <PrivateRoute 
            path='/admin/game/upcoming-list' 
            component={AdminUpcomingGameList}/>
          <Route 
            path='/admin/login' 
            component={AdminLogin}/>
          <NotFound/>
        </Switch>
        </Context.Provider>
        <Footer/>
        
    </main>
  );
  }
}

export default withRouter(App);