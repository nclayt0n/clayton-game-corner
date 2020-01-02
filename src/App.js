import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Context from './Context';
import LandingPage from './Components/LandingPage';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
import PrivateRoute from './Utils/PrivateRoute';
import TabletopGameReview from './Components/TabletopGameReviews';
import VideoGameReview from './Components/VideoGameReview';
import UpcomingGameList from './Components/UpcomingGameList';
import './App.css';
import NotFound from './Components/NotFound';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import UpcomingGameInfo from './Components/UpcomingGameInfo';
import AdminLandingPage from './AdminComponents/AdminLandingPage';
import AdminReview from './AdminComponents/AdminReviewList';
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
          upcomingGames:[]
      };
    }
    handleAddReviews=(reviews)=>{
    this.setState({
      reviews:[...reviews]
    })
  }
  handleAddUpcomings=(upcomingGames)=>{
    this.setState({
      upcomingGames:[...upcomingGames]
    })
  }
  handleAddBio=(bio)=>{
    this.setState({
      bio:bio
    })
  }
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
      addUpcomingGames:this.handleAddUpcomings,
      addBio:this.handleAddBio
    };
  return (
    <main className='App'>
        <Context.Provider value={contextValue}>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/game/review/tabletop' component={TabletopGameReview}/>
          <Route path='/game/review/video' component={VideoGameReview}/>
          <Route exact path='/game/upcoming' component={UpcomingGameList}/>
          <Route exact path='/game/upcoming/info' component={UpcomingGameInfo}/>
          <Route path='/nav' component={Nav}/>
          <PrivateRoute exact path='/admin' component={AdminLandingPage}/>
          <PrivateRoute exact path='/admin/game/review-list' component={AdminReviewList}/>
          <PrivateRoute exact path='/admin/game/upcoming-list' component={AdminUpcomingGameList}/>
          <Route exact path='/admin/login' component={AdminLogin}/>
          <Route component={NotFound}/>
        </Switch>
        </Context.Provider>
      <Footer/>
    </main>
  );
  }
}

export default App;