import React from 'react';
import {withRouter} from 'react-router-dom';
import AdminReview from './AdminReview';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
import ValidationError from '../Validation/ValidationError';
import Context from '../Context';
import Header from '../Components/Header';

class AdminLogin extends React.Component{
    static contextType=Context;
    static defaultProps = {
        location: {},
        history: {
        push: () => {},
    },
  }

state = { error: null }
  handleLoginSuccess = (token) => {
      console.log(this.props)
    let user_id=TokenService.decodeAuthToken(token)
    this.context.user_id=user_id;
    this.props.history.push('/admin')
  }

  handleSubmitBasicAuth = ev => {
      
    ev.preventDefault()
    const { email, password } = ev.target
    TokenService.saveAuthToken(
     TokenService.makeBasicAuthToken(email.value,password.value))
    email.value = ''
    password.value = ''
    this.handleLoginSuccess()
  }
handleSubmitJWTAuth=ev=>{
  ev.preventDefault()
  this.setState({error:null})
  const {email,password}=ev.target
  AuthApiService.postLogin(email.value,
    password.value)

  .then(res=>{ 
    if (res.error) {
      this.setState({error:res.error})
   }
   else {
        email.value=''
       password.value=''
       TokenService.saveAuthToken(res.authToken)
       this.handleLoginSuccess(res.authToken)
   }
   
  })
  .catch(res=>{
    this.setState({error:res.error})
  })
}
    render(){
        return(
        <div id='loginContainer'>
        <Header/>
            <section>
                 <form id='loginForm' onSubmit={this.handleSubmitJWTAuth} >
                    <fieldset>
                        <legend>Login Form</legend>
                        <label htmlFor='username'>Email:<br/>
                            <input type='text' name='email'/>
                        </label><br/>
                        <label htmlFor='password'>Password:<br/>
                            <input type='password' name='password'/>
                        </label><br/>
                        <button type='submit'>Login</button>
                </fieldset>
              </form>  
              <ValidationError Namemessage={this.state.error}/>
            </section>
            </div>)
    }
}
export default withRouter(AdminLogin);