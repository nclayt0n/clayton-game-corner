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
                            <textarea>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                            </textarea>
                            <button type='button'>Update</button>
                        </form>
                    </section>
            </div>
        )
    }
}
export default AdminLandingPage;