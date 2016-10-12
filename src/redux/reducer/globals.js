/*
 * @Author: hgs 
 * @Date: 2016-10-07 16:30:37 
 * @Last Modified by: hgs
 * @Last Modified time: 2016-10-12 23:50:59
 */
import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'

import {SET_DICTIONARY} from '../types'


const initialState = fromJS({
    dictionary: {
        youDaoSwitch: true,
        baiDuSwitch: true,
        googleSwitch: true,
        bingSwitch: true
    }
})

export default createReducer(initialState, {
    [SET_DICTIONARY]: (state, action) => {
        return state.merge({
            dictionary: action.dictionary
        })

    }

})