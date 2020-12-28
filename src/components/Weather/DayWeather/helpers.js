import { monthNames, dayTitles } from './constants';

export const getFormattedDate = (day) => {
    const date = new Date();
    date.setDate(date.getDate() + day);
    const monthNum = date.getMonth();
    const month = monthNames[monthNum];
    const monthDay = date.getDate();
    return `${month}, ${monthDay}`;
};

export const getDayTitle = (day) => dayTitles[day];
