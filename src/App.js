import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
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

class App extends React.Component {
  render(){
  return (
    <main className='App'>
        <Header/>
        <Nav/>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <PublicOnlyRoute path='/game/review/tabletop' component={TabletopGameReview}/>
          <PublicOnlyRoute path='/game/review/video' component={VideoGameReview}/>
          <PublicOnlyRoute exact path='/game/upcoming' component={UpcomingGameList}/>
          <PublicOnlyRoute exact path='/game/upcoming/info' component={UpcomingGameInfo}/>
          
          <PublicOnlyRoute exact path='/admin' component={AdminLandingPage}/>
          <PublicOnlyRoute exact path='/admin/game/review-list' component={AdminReviewList}/>
          <PublicOnlyRoute exact path='/admin/game/upcoming-list' component={AdminUpcomingGameList}/>
          <Route exact path='/admin/login' component={AdminLogin}/>
          <Route component={NotFound}/>
        </Switch>
      <Footer/>
    </main>
  ); 
  }
 
}

export default withRouter(App);