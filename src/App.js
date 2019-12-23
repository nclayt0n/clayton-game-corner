import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Context from './Context';
import LandingPage from './Components/LandingPage';
import PublicOnlyRoute from './Utils/PublicOnlyRoute';
import TabletopGameReview from './Components/TabletopGameReviews';
import VideoGameReview from './Components/VideoGameReview';
import UpcomingGame from './Components/UpcomingGame';
import './App.css';
import NotFound from './Components/NotFound';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import UpcomingGameInfo from './Components/UpcomingGameInfo';

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
          <PublicOnlyRoute path='/game/upcoming' component={UpcomingGame}/>
          <Route component={NotFound}/>
          <PublicOnlyRoute component={UpcomingGameInfo}/>
      </Switch>
      <Footer/>
    </main>
  ); 
  }
 
}

export default App;