import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,StaticRouter} from 'react-router-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AdminReview from '../AdminReview';

describe('Admin Review List ',()=>{
  it('renders without crashing', () => {
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
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <App>
                        {reviews.map(review=>{
                            return <AdminReview key={78} review={review}/>
                        })}
                    </App>
                </BrowserRouter>,
                div
              );
            ReactDOM.unmountComponentAtNode(div);
        });
    it('snapshot', () => {
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
        const wrapper=shallow(
            <StaticRouter>
                {reviews.map(review=>{
                    return <AdminReview key={288} review={review}/>
                })}
            </StaticRouter>)
                        expect(toJson(wrapper))
                        .toMatchSnapshot()
    });
})