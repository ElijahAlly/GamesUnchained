import { combineReducers } from 'redux';
import filtersReducer from '../filters_reducer'
import gamesReducer from '../games_reducer'

const entities = combineReducers({
    filters: filtersReducer,
    gameId: gamesReducer,
});

export default entities;