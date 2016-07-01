/**
 * Created by cong on 16/6/29.
 * @flow
 */
'use strict';
import * as types from '../constants/ActionTypes';
const initialState = {
    count: 0,
    red:10
};
export default function changeCount(state = initialState, action) {
    switch (action.type) {
        case types.ACTON_CHANGE_COUNT:
            return Object.assign({}, state, {
                count: action.count
            });
        default:
            return state;
        case types.ACTION_CHANGE_RED:
        return Object.assign({},state,{
            red:action.red
        });
    }
}