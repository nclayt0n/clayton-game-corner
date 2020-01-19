import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '../../App';
import AdminLandingPage from '../AdminLandingPage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import logo from '../../images/largelogo.png';
describe('AdminLandingPage',()=>{
    const bio='User bio 4';
  it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <App>
                        <AdminLandingPage/>
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
                    <AdminLandingPage>
                        <section key='adminLandingSection'>
                            <div className='logoContainer'>
                                <img src={logo} alt='clayton game corrin big logo'/>
                            </div>
                            <form onSubmit={(e)=>this.updateBio(e)}>
                                <textarea name='bio' defaultValue={bio}></textarea>
                                <button type='submit'>Update</button>
                            </form>
                        </section>
                    </AdminLandingPage>
                </App>
            </BrowserRouter>)
            expect(toJson(wrapper))
            .toMatchSnapshot()
    });
})
