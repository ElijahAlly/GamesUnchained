import { combineReducers } from 'redux';
import filtersReducer from '../filters_reducer'
import gamesReducer from '../games_reducer'
import imagesReducer from '../images_reducer';

const entities = combineReducers({
    filters: filtersReducer,
    gameId: gamesReducer,
    images: imagesReducer,
});

export default entities;