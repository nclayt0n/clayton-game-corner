import React from 'react';
import {Switch} from 'react-router-dom';
import NotFound from '../Components/NotFound';
import logo from '../images/largelogo.png';

class AdminLandingPage extends React.Component{
    
    render(){
        return(
            <div>
                    <section>
                        <form>
                            <textarea>Welcome! My name is Corrin and I have a love for video games! Tabletop, Xbox, Card, Playstation, PC, Switch, DS, etc. You name it, I've either played it or plan on it. This site was created so I could share my experience and opinions of games I've played. Enjoy, and happy gaming! 
                            </textarea>
                            <button type='button'>Update</button>
                        </form>
                    </section>
            </div>
        )
    }
}
export default AdminLandingPage;