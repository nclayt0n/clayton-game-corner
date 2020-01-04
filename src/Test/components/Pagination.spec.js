import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from '../../App';
import Pagination from '../../Components/Pagination';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Pagination ',()=>{
    let reviews = [{
            "title": "Test Review 1",
            "review": "This was the best game ever!",
            "picture": "['http://ecx.images-amazon.com/images/I/51l4YWeAEvL._SY300_.jpg']",
            "link": "http://www.notArealSite.com",
            "game_type": "tabletop"
        },
        {
            "title": "Test Review 2",
            "review": "This was an ok game.",
            "picture": "['http://ecx.images-amazon.com/images/I/51l4YWeAEvL._SY300_.jpg']",
            "link": "http://www.notArealSite.com",
            "game_type": "tabletop"
        }];
  it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <App>
                        <Pagination 
                            page={0} 
                            pageLimit={10}
                            items={reviews}/>
                    </App>
                </BrowserRouter>,
                div
              );
            ReactDOM.unmountComponentAtNode(div);
        });
    it('snapshot', () => {
        const wrapper=shallow(<Pagination 
                                page={0} 
                                pageLimit={10}
                                items={reviews}/>)
                        expect(toJson(wrapper))
                        .toMatchSnapshot()
    });
})