import Logger, { ERRORS } from '../../logger';

const apiResult = async (request) => {
    let result = {};
    try {
        result = await request;
    } catch (e) {
        Logger.error({ name: ERRORS.API_ERROR, data: e });
    }
    const { data } = result;
    return data;
};

export default apiResult;
