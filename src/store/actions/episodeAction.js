import { GET_EPISODE } from '../types';
import axiosInstance from '../../config/axiosInstance';


export const getEpisode = (id) => async dispatch => {

    try {
        const res = await axiosInstance.get('/episode/'+id);

        dispatch({
            type: GET_EPISODE,
            payload: res.data
        });
    }
    catch (e) {
        // dispatch( {
        //     type: USERS_ERROR,
        //     payload: console.log(e),
        // })
    }

}
