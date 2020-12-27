import { SEVERITY, ERRORS } from './constants';

const log = ({ name, data, level }) => {
    console.log({ name, data, level }); // TODO add better implementation
};

const info = ({ name, data }) => {
    log({ name, data, level: SEVERITY.INFO });
};

const warn = ({ name, data }) => {
    log({ name, data, level: SEVERITY.WARN });
};

const error = ({ name, data }) => {
    log({ name, data, level: SEVERITY.ERROR });
};

export { ERRORS };

export default {
    info,
    warn,
    error,
};
