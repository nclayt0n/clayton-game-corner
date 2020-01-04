import React from 'react';
import {withRouter} from 'react-router-dom';
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
                </fieldset> 
                <button type='submit'>Login</button>
                <button type='button' onClick={()=>this.props.history.goBack()}>Back</button>
              </form>  
              <ValidationError errorMessage={this.state.error}/>
            </section>
            <section>
              <p>email: admin@test.com password: testP@ssw0rd
Once logged in you will land on the admin Landing Page where you can view and update current welcome paragraph. Once logged in you can also now see the Nav bar Admin links as well. To add/update/delete Reviews or Upcoming Dates go to Admin Game Reviews or Admin Upcoming Game Dates.</p>
            </section>
            </div>)
    }
}
export default withRouter(AdminLogin);