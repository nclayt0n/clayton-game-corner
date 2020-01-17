import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,StaticRouter} from 'react-router-dom';
import App from '../../App';
import Pagination from '../../Components/Pagination';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Review from '../../Components/Review';
import Context from '../../Context';
import TabletopGameReview from '../../Components/TabletopGameReviews';
import Header from '../../Components/Header';

describe('Tabletop ',()=>{
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
                        <TabletopGameReview key={6}>
                            <Header/>
                            <h2>Tabletop Game Review</h2>
                                {reviews.map(review=>{
                                    return <Review key={28} review={review}/>
                                })}
                            <Pagination page={0} 
                                        pageLimit={10}
                                        items={reviews}/>
                        </TabletopGameReview>
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
                <App>
                    <Context.Provider>
                        <TabletopGameReview>
                            <Header/>
                            <h2>Tabletop Game Review</h2>
                            {   reviews.map(review=>{
                                    return <Review key={7} review={review}/>
                                })}
                            <Pagination page={0} 
                                        pageLimit={10}
                                        items={reviews}/>
                        </TabletopGameReview>
                    </Context.Provider>
                </App>
            </StaticRouter>)
            expect(toJson(wrapper))
            .toMatchSnapshot()
    });
})