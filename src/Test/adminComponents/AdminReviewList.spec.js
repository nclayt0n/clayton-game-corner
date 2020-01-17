import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,StaticRouter} from 'react-router-dom';
import App from '../../App';
import Pagination from '../../Components/Pagination';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Context from '../../Context';
import AdminReviewList from '../../AdminComponents/AdminReviewList';
import Header from '../../Components/Header';
import AdminReview from '../../AdminComponents/AdminReview';

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
                        <AdminReviewList key={6}>
                            <Header/>
                            <section key={626}>
                                <form onSubmit={(e)=>this.addReview(e,this.context)}>
                                <fieldset>
                                    <legend>Add Game Review
                                    </legend>
                                    <label htmlFor='title'>Title: 
                                        <input name='title' type="text"/>
                                    </label><br/>
                                    <label htmlFor='review'>Review: <br/>
                                        <textarea placeholder='add review here' name='review'></textarea>
                                    </label><br/>
                                    <label htmlFor='link'>Link to Buy: 
                                        <input name='link' type="url"/>
                                    </label><br/>
                                    <select name='game_type'>
                                        <option value=''>Game Type:</option>
                                        <option value='video'>Video</option>
                                        <option value='tabletop'>Tabletop</option>
                                    </select>
                                </fieldset> 
                                <button type='submit'>Add Review</button>
                                </form>
                            </section>
            
                            <h2>Review List</h2>
                            {reviews.map(review=>{
                                return <AdminReview key={78} review={review}/>
                            })}
                            <Pagination 
                                page={0} 
                                pageLimit={10} 
                                setPage={(page)=>this.setPage(page)} 
                                items={reviews}/>
                        </AdminReviewList>
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
                        <AdminReviewList key={6}>
                            <Header/>
                            <section key={301}>
                                <form onSubmit={(e)=>this.addReview(e,this.context)}>
                                    <fieldset>
                                        <legend>Add Game Review</legend>
                                        <label htmlFor='title'>Title: 
                                            <input name='title' type="text"/>
                                        </label><br/>
                                        <label htmlFor='review'>Review: <br/>
                                            <textarea placeholder='add review here' name='review'></textarea>
                                        </label><br/>
                                        <label htmlFor='link'>Link to Buy: 
                                            <input name='link' type="url"/>
                                        </label><br/>
                                        <select name='game_type'>
                                            <option value=''>Game Type:</option>
                                            <option value='video'>Video</option>
                                            <option value='tabletop'>Tabletop</option>
                                        </select>
                                    </fieldset> 
                                    <button type='submit'>Add Review</button>
                                    </form>
                                </section>
            
                                <h2>Review List</h2>
                                {reviews.map(review=>{
                                    return <AdminReview key={288} review={review}/>
                                })}
                                <Pagination 
                                    page={0} 
                                    pageLimit={10} 
                                    setPage={(page)=>this.setPage(page)} 
                                    items={reviews}/>
                        </AdminReviewList>
                    </Context.Provider>
                </App>
            </StaticRouter>)
                        expect(toJson(wrapper))
                        .toMatchSnapshot()
    });
})