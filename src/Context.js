import React from 'react';

const Context = React.createContext({
    user_id: '',
    reviews: [],
    bio: '',
    upcomingGames: [],
    picture: '',
    addPicture: () => {},
    addReviews: () => {},
    addReview: () => {},
    deleteReview: () => {},
    updateReview: () => {},
    updateUpcomingGame: () => {},
    addBio: () => {},
    updateBio: () => {},
    addUpcomingGames: () => {},
    deleteUpcomingGame: () => {},
    addUpcomingGame: () => {},
});
export default Context;