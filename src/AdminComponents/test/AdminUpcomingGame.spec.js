import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,StaticRouter} from 'react-router-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AdminUpcomingGame from '../AdminUpcomingGame';

describe('AdminUpcomingGameList',()=>{
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
                        {games.map(game=>{
                            return <AdminUpcomingGame key={39} game={game}/>
                        })}
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
                    return <AdminUpcomingGame key={42} game={game}/>
                })} 
            </StaticRouter>)
            expect(toJson(wrapper))
            .toMatchSnapshot()
    });
})