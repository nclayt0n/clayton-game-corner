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
        <>
          <Header/>
            <section id='admin-login'>
                 <form 
                      id='admin-login-form' 
                      onSubmit={this.handleSubmitJWTAuth} >
                    <fieldset>
                        <legend> Admin Login</legend>
                            <input 
                              type='text' 
                              name='email'
                              placeholder='email'
                              />
                        <br/>
                            <input 
                              type='password' 
                              name='password'
                              placeholder='password'
                              />
                        <br/>
                </fieldset> 
                <button type='submit' aria-label='login-button'>Login</button>
                <button type='button' onClick={()=>this.props.history.goBack()} aria-label='back-button'>Back</button>
              </form>  
              <ValidationError errorMessage={this.state.error}/>
            </section>
            <section className='landing-page-header test-instructions'>
              <p >EMAIL: admin@test.com <br/>PASSWORD: testP@ssw0rd<br/>
Once logged in you will be on the Admin Landing Page where you can view and update current welcome paragraph for the User Landing Page. You can also now view and access the Admin links in the Nav Bar. To add/update/delete Reviews, click Admin Game Reviews,or add/update/delet  Upcoming Dates, click Admin Upcoming Game Dates.</p>
            </section>
            </>)
    }
}
export default withRouter(AdminLogin);