import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '../../App';
import LandingPage from '../LandingPage';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
describe('LandingPage',()=>{
  it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <App>
                        <LandingPage/>
                    </App>
                </BrowserRouter>,
                div
              );
            ReactDOM.unmountComponentAtNode(div);
        });
    it('snapshot', () => {
        const wrapper=shallow(<LandingPage/>)
        expect(toJson(wrapper))
 .      toMatchSnapshot()
    });
})
