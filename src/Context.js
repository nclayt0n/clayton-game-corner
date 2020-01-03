import React from 'react';

const Context = React.createContext({
    user_id: '',
    reviews: [],
    bio: '',
    upcomingGames: [],
    addReviews: () => {},
    addReview: () => {},
    deleteReview: () => {},
    updateReview: () => {},
    updateUpcomingGame: () => {},
    addBio: () => {},
    addUpcomingGames: () => {},
    deleteUpcomingGame: () => {},
    addUpcomingGame: () => {},
});
export default Context;