import React from 'react';
import AdminReview from './AdminReview';

class AdminLogin extends React.Component{
    render(){
        return(
            <section>
                <h3>Login</h3>
                    <form>
                        <label>Email
                            <input type='text'/>
                        </label>
                        <label>Password
                            <input type="text"/>
                        </label>
                    </form>
                    <button type='button'>Login</button>
            </section>)
    }
}
export default AdminLogin;