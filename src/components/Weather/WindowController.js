import React from "react";
import {useSelector} from "react-redux";
import {WeekWeather} from "./WeekWeather";
import {DayTodayWeather} from "./DayTodayWeather";
import {DayTomorrowWeather} from "./DayTomorrowWeather";
import {Home} from "./Home";

export const WindowController = () => {
    const window = useSelector((state) => state.window)

    const renderContent = () => {
        switch (window) {
            case 'Home':
                return <div><Home/></div>
            case 'Today':
                return <div>
                    <DayTodayWeather/>
                </div>
            case 'Tomorrow':
                return <div>
                    <DayTomorrowWeather/>
                </div>
            case 'Week':
                return <div>
                    <WeekWeather/>
                </div>

        }
    }

    return (renderContent())

}
