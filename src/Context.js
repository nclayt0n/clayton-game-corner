import React from 'react';

const Context = React.createContext({
    user_id: '',
    reviews: [],
    addReviews: () => {},
});
export default Context;