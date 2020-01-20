import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,StaticRouter} from 'react-router-dom';
import App from '../../App';
import Pagination from '../Pagination';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UpcomingGameList from '../../Components/UpcomingGameList';
import UpcomingGameInfo from '../../Components/UpcomingGameInfo';

describe('Upcoming Games ',()=>{
    let games=[{
            "title": "Upcoming test Game 1",
            "date": "02/01/2020",
            "game_type": "video"
        },
        {
            "title": "Upcoming test Game 2",
            "date": "03/01/2020",
            "game_type": "tabletop"

        }];
  it('renders without crashing', () => {
     
            const div = document.createElement('div');
            ReactDOM.render(
                <BrowserRouter>
                    <App>
                        <UpcomingGameList key={4}>
                            <article key={46}>
                                <h3>Upcoming Games</h3>
                                {games.map(game=>{
                                    return <UpcomingGameInfo 
                                        key={33} 
                                        game={game}/>
                                })}
                            </article>
                            <Pagination page={0} 
                                        pageLimit={10}
                                        items={games}/>
                        </UpcomingGameList>
                    </App>
                </BrowserRouter>,
                div
              );
            ReactDOM.unmountComponentAtNode(div);
        });
    it('snapshot', () => {
        const wrapper=shallow(
            <StaticRouter>
                {games.map(game=>{
                    return <UpcomingGameInfo 
                                key={36} 
                                game={game}/>
                })}
            </StaticRouter>)
            expect(toJson(wrapper))
            .toMatchSnapshot()
    });
})