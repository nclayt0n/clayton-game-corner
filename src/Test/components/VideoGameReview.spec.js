import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,StaticRouter} from 'react-router-dom';
import App from '../../App';
import Pagination from '../../Components/Pagination';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Review from '../../Components/Review';
import Context from '../../Context';
import VideoGameReview from '../../Components/VideoGameReview';
import Header from '../../Components/Header';
import Nav from '../../Components/Nav';

describe('Video Game Review ',()=>{  
    let reviews = [{
            "title": "Test Review 1",
            "review": "This was the best game ever!",
            "picture": "['http://ecx.images-amazon.com/images/I/51l4YWeAEvL._SY300_.jpg']",
            "link": "http://www.notArealSite.com",
            "game_type": "video"
        },
        {
            "title": "Test Review 2",
            "review": "This was an ok game.",
            "picture": "['http://ecx.images-amazon.com/images/I/51l4YWeAEvL._SY300_.jpg']",
            "link": "http://www.notArealSite.com",
            "game_type": "video"
        }];

    it('renders without crashing', () => {
      
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <App>
                        <VideoGameReview key={32}>
                            <Header/>
                            <h2>Video Game Review</h2>
                            {reviews.map(review=>{
                                return <Review key={58} review={review}/>
                            })}
                            <Pagination page={0} 
                                        pageLimit={10}
                                        items={reviews}/>
                        </VideoGameReview>
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
                        <VideoGameReview key={85}>
                            <Header/>
                            <h2>Video Game Review</h2>
                            {reviews.map(review=>{
                                return <Review key={23} review={review}/>
                            })}
                            <Pagination page={0} 
                                        pageLimit={10}
                                        items={reviews}/>
                        </VideoGameReview>
                    </Context.Provider>
                </App>
            </StaticRouter>)
                        expect(toJson(wrapper))
                        .toMatchSnapshot()
    });
})