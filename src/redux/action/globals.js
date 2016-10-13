import * as types from '../types'


export const setDictionary = (dictionary) => {
    return {
        type: types.SET_DICTIONARY,
        key: dictionary.key,
        value: dictionary.value
    }

}