import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
    let location = useLocation();
    return (
        <div>
            <h1>Not Found {location.pathname}</h1>
        </div>
    );
};

export default NoMatch;