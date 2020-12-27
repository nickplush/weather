export const MEANTIME = '[MEANTIME] change';

export const switchOnToday = () => ({ type: MEANTIME, payload: 'Today' });

export const switchOnTomorrow = () => ({ type: MEANTIME, payload: 'Tomorrow' });

export const switchOnWeek = () => ({ type: MEANTIME, payload: 'Week' });
