import React from 'react';

const Context = React.createContext({
    user_id: '',
    reviews: [],
    bio: '',
    upcomingGames: [],
    addReviews: () => {},
    addBio: () => {},
    addUpcomingGames: () => {},
});
export default Context;