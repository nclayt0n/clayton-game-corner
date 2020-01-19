import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,StaticRouter,Route} from 'react-router-dom';
import App from '../../App';
import AdminLogin from '../AdminLogin';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../Components/Header';

describe('AdminLogin',()=>{
  it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <App>
                        <AdminLogin/>
                    </App>
                </BrowserRouter>,
                div
              );
            ReactDOM.unmountComponentAtNode(div);
        });
    it('snapshot', () => {
        const wrapper=shallow(
            <BrowserRouter>
                <App>
                    <AdminLogin>
                        <div id='loginContainer'>
                            <Header/>
                            <section>
                                <form id='loginForm'>
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
                            </section>
                        </div>
                    </AdminLogin>
                </App>
            </BrowserRouter>)
            expect(toJson(wrapper))
            .toMatchSnapshot()
    });
})
