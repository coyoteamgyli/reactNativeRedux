/**
 * Created by cong on 16/6/29.
 * @flow
 */
import * as types from '../constants/ActionTypes';

export function changeCountAction(count) {
    return dispatch => {
        dispatch(changeCountType(count));
    }
}

export function changeredAction(red){
    return dispatch => {
        dispatch(changeCountred(red))
    }
}
function changeCountType(count) {
    return {
        type: types.ACTON_CHANGE_COUNT,
        count
    }
}

function changeCountred(red){
    return{
        type:types.ACTION_CHANGE_RED,
        red
    }
}