import { act } from 'react-test-renderer'
import { GET_CHARACTERS, SET_FOLLOWING_PAGE, } from '../types'

const initialState = {
    characters: [],
    loading: true,
    page: 1,
    maxPage: 0
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_CHARACTERS:
            return {
                ...state,
                ...action.payload,
                loading: false,

            }
        case SET_FOLLOWING_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default: return state
    }

}