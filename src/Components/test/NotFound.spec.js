import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '../../App';
import NotFound from '../NotFound';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
describe('LandingPage',()=>{
  it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <App>
                        <NotFound/>
                    </App>
                </BrowserRouter>,
                div
              );
            ReactDOM.unmountComponentAtNode(div);
        });
    it('snapshot', () => {
        const wrapper=shallow(<NotFound/>)
        expect(toJson(wrapper))
 .      toMatchSnapshot()
    });
})