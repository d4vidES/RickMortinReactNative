import { GET_CHARACTERS, SET_FOLLOWING_PAGE } from '../types';
import axiosInstance from '../../config/axiosInstance';


export const getCharacters = () => async dispatch => {

    try {
        const res = await axiosInstance.get('/character');

        dispatch({
            type: GET_CHARACTERS,
            payload: {
                characters: res.data.results,
                maxPage: res.data.info.pages
            }
        });
    }
    catch (e) {
        // dispatch( {
        //     type: USERS_ERROR,
        //     payload: console.log(e),
        // })
    }

}

export const getFollowingPage = (followingPage) => async dispatch => {

    try {
        const res = await axiosInstance.get('/character', { params: { page: followingPage } });
        dispatch({
            type: SET_FOLLOWING_PAGE,
            payload: followingPage
        });
        dispatch({
            type: GET_CHARACTERS,
            payload: { characters: res.data.results }
        });
    }
    catch (e) {
        // dispatch( {
        //     type: USERS_ERROR,
        //     payload: console.log(e),
        // })
    }

}