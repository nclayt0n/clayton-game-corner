import React from 'react';

const Context = React.createContext({
    user_id: '',
    reviews: [],
    bio: '',
    upcomingGames: [],
    addReviews: () => {},
    updateUpcomingGame: () => {},
    addBio: () => {},
    addUpcomingGames: () => {},
    deleteUpcomingGame: () => {}
});
export default Context;