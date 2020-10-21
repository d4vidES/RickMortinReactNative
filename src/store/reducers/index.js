import { combineReducers } from 'redux'
import characterReducer from './characterReducer'
import episodeReducer from './episodeReducer';

export default combineReducers({
    characters: characterReducer,
    episode: episodeReducer
});