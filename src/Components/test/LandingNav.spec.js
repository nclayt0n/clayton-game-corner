import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,StaticRouter} from 'react-router-dom';
import App from '../../App';
import LandingPage from '../LandingPage';
import LandingNav from '../LandingNav';
import Context from '../../Context';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
describe('LandingPage',()=>{
  it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <App>
                        <LandingPage>
                            <LandingNav/>
                        </LandingPage>
                    </App>
                </BrowserRouter>,
                div
              );
            ReactDOM.unmountComponentAtNode(div);
        });
    it('snapshot', () => {
        const wrapper=shallow(
        <StaticRouter>
            <App>
                <Context.Provider>
                    <LandingNav/>
                </Context.Provider>
            </App>
        </StaticRouter>)
        expect(toJson(wrapper))
 .      toMatchSnapshot()
    });
})
