import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import App from '../../App';
import Pagination from '../../Components/Pagination';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Context from '../../Context';
import Header from '../../Components/Header';
import AdminUpcomingGameList from '../AdminUpcomingGameList';
import AdminUpcomingGame from '../AdminUpcomingGame';

describe('AdminUpcomingGameList', () => {
            let games = [{
                    "title": "Upcoming test Game 1",
                    "date": "02/01/2020",
                    "game_type": "video"
                },
                {
                    "title": "Upcoming test Game 2",
                    "date": "03/01/2020",
                    "game_type": "tabletop"

                }
            ];
            it('renders without crashing', () => {

                const div = document.createElement('div');
                ReactDOM.render( <
                    BrowserRouter >
                    <
                    App >
                    <
                    AdminUpcomingGameList key = { 4 } >
                    <
                    Header / >
                    <
                    section key = { 78 } >
                    <
                    form >
                    <
                    fieldset >
                    <
                    legend > Add Upcoming Game < /legend> <
                    label htmlFor = 'date' > Date:
                    <
                    input name = 'date'
                    type = "date" / >
                    <
                    /label> <
                    br / >
                    <
                    label htmlFor = 'title' > Title:
                    <
                    input name = 'title'
                    type = "text" / >
                    <
                    /label> <
                    br / >
                    <
                    select name = 'game_type' >
                    <
                    option value = '' > Game Type: < /option> <
                    option value = 'video' > Video < /option> <
                    option value = 'tabletop' > Tabletop < /option> <
                    /select> <
                    /fieldset> <
                    button type = 'submit' > Add Game < /button> <
                    /form> <
                    /section> <
                    h2 > Upcoming Game List < /h2> {
                        games.map(game => {
                            return <AdminUpcomingGame key = { 39 }
                            game = { game }
                            />
                        })
                    } <
                    Pagination page = { 0 }
                    pageLimit = { 10 }
                    items = { games }
                    /> <
                    /AdminUpcomingGameList> <
                    /App> <
                    /BrowserRouter>,
                    div
                );
                ReactDOM.unmountComponentAtNode(div);
            });
            it('snapshot', () => {
                    const wrapper = shallow( <
                        StaticRouter >
                        <
                        App >
                        <
                        Context.Provider >
                        <
                        AdminUpcomingGameList key = { 5 } >
                        <
                        Header / >
                        <
                        section key = { 78 } >
                        <
                        form >
                        <
                        fieldset >
                        <
                        legend > Add Upcoming Game < /legend> <
                        label htmlFor = 'date' > Date:
                        <
                        input name = 'date'
                        type = "date" / >
                        <
                        /label> <
                        br / >
                        <
                        label htmlFor = 'title' > Title:
                        <
                        input name = 'title'
                        type = "text" / >
                        <
                        /label> <
                        br / >
                        <
                        select name = 'game_type' >
                        <
                        option value = '' > Game Type: < /option> <
                        option value = 'video' > Video < /option> <
                        option value = 'tabletop' > Tabletop < /option> <
                        /select> <
                        /fieldset> <
                        button type = 'submit' > Add Game < /button> <
                        /form> <
                        /section> <
                        h2 > Upcoming Game List < /h2> {
                            games.map(game => {
                                return <AdminUpcomingGame key = { 42 }
                                game = { game }
                                />
                            })
                        } <
                        Pagination page = { 0 }
                        pageLimit = { 10 }
                        items = { games }
                        /> <
                        /AdminUpcomingGameList> <
                        /Context.Provider> <
                        /App> <
                        /StaticRouter>)
                        expect(toJson(wrapper))
                        .toMatchSnapshot()
                    });
            })