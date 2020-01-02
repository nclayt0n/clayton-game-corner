import React from 'react';

const Context = React.createContext({
    user_id: '',
    reviews: [],
    upcomingGames: [],
    addReviews: () => {},
    addUpcomingGames: () => {},
});
export default Context;