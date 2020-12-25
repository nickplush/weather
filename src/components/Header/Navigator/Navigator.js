import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import {switchOnToday, switchOnTomorrow, switchOnWeek} from "../../../actions/changeWindow";

export default function Navigator() {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const todayWindow = () => {
        dispatch(switchOnToday())
    }
    const tomorrowWindow = () => {
        dispatch(switchOnTomorrow())
    }
    const weekWindow = () => {
        dispatch(switchOnWeek())
    }
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels>
            <BottomNavigationAction label="Today" onClick={todayWindow}/>
            <BottomNavigationAction label="Tomorrow" onClick={tomorrowWindow}/>
            <BottomNavigationAction label="Week" onClick={weekWindow}/>
        </BottomNavigation>
    );
}
