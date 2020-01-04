import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '../../App';
import Header from '../../Components/Header';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
describe('Header',()=>{
  it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <App>
                        <Header/>
                    </App>
                </BrowserRouter>,
                div
              );
            ReactDOM.unmountComponentAtNode(div);
        });
    it('snapshot', () => {
        const wrapper=shallow(<Header/>)
        expect(toJson(wrapper))
 .      toMatchSnapshot()
    });
})