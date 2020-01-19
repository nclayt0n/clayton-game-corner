import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '../../App';
import Footer from '../Footer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
describe('Footer',()=>{
  it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <App>
                        <Footer/>
                    </App>
                </BrowserRouter>,
                div
              );
            ReactDOM.unmountComponentAtNode(div);
        });
    it('snapshot', () => {
        const wrapper=shallow(<Footer/>)
        expect(toJson(wrapper))
 .      toMatchSnapshot()
    });
})