import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => {
    return (
        <div className='container'>
            <Link to="/">Home</Link>
            <Link to="/today">Today</Link>
            <Link to="/tomorrow">Tomorrow</Link>
            <Link to="/week">Week</Link>
        </div>
    );
};

export default Navigator;
