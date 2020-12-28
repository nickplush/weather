import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
    BottomNavigation,
    BottomNavigationAction,
} from '@material-ui/core';

import {
    switchOnToday,
    switchOnTomorrow,
    switchOnWeek,
} from '../../../actions/changeWindow';

const Navigator = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState('');

    const onPageChange = useCallback((event, newValue) => setPage(newValue), []);

    const onTodayClick = useCallback(() => dispatch(switchOnToday()), []);
    const onTomorrowClick = useCallback(() => dispatch(switchOnTomorrow()), []);
    const onWeekClick = useCallback(() => dispatch(switchOnWeek()), []);

    return (
        <BottomNavigation
            value={page}
            onChange={onPageChange}
            showLabels
        >
            <BottomNavigationAction label="Today" onClick={onTodayClick}/>
            <BottomNavigationAction label="Tomorrow" onClick={onTomorrowClick}/>
            <BottomNavigationAction label="Week" onClick={onWeekClick}/>
        </BottomNavigation>
    );
};

export default Navigator;
