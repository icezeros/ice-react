import * as types from '../types'


export const setDictionary = (dictionary) => {
    return {
        type: types.SET_DICTIONARY,
        dictionary: dictionary
    }

}