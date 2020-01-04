import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '../../App';
import Nav from '../../Components/Nav';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
describe('Nav',()=>{
  it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <App>
                        <Nav/>
                    </App>
                </BrowserRouter>,
                div
              );
            ReactDOM.unmountComponentAtNode(div);
        });
    it('snapshot', () => {
        const wrapper=shallow(<Nav/>)
        expect(toJson(wrapper))
 .      toMatchSnapshot()
    });
})