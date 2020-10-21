import {GET_EPISODE } from '../types'

const initialState = {
    episode: {},
    loading: true,
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_EPISODE:
            return {
                ...state,
                episode: action.payload,
                loading: false,

            }
        default: return state
    }

}