import axios from 'axios';
import * as constants from './constants';
import * as types from '../actions/actionTypes'

// uses axios to perform http requests
export default class API {
    public static Get(dispatch: any, action: string, data?: any) {
        return axios.get(`${constants.API_URL}${action}`, {
            params: data,
        }).catch((value) => {
            dispatch({ type: types.REQUEST_FAILURE, data: (<any>value).data });
        });
    }
}