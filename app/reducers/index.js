/**
 * Created by cong on 16/6/29.
 * @flow
 */

'use strict';
import {combineReducers} from 'redux';
import newCount from './changeCount';
const rootReducer = combineReducers({
    newCount
});
export default rootReducer;