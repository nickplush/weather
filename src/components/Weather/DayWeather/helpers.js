import { monthNames, dayTitles } from './constants';

export const getFormattedDate = (day) => {
    let date = new Date();
    date = new Date(date);
    const monthNum = date.getMonth();
    const month = monthNames[monthNum];
    const monthDay = date.getDate() + day;
    return `${month}, ${monthDay}`;
};

export const getDayTitle = (day) => dayTitles[day];
