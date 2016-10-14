/*
 * @Author: hgs 
 * @Date: 2016-10-07 16:30:37 
 * @Last Modified by: hgs
 * @Last Modified time: 2016-10-14 10:30:02
 */
import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'
import { combineReducers } from 'redux'

import { SET_DICTIONARY } from '../types'


const initialStateDic = fromJS({

    youDaoSwitch: false,
    baiDuSwitch: true,
    googleSwitch: true,
    bingSwitch: true
})

const dictionary = createReducer(initialStateDic, {
    [SET_DICTIONARY]: (state, action) =>/* {*/
        // return state.merge({
        //     dictionary: action.dictionary
        // })
        /*return*/ state.set(action.key, action.value)

    /*}*/

})


const globals = combineReducers({
    dictionary
})

export default globals