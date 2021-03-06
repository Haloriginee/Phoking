import usersReducer from './users_reducer';
import { combineReducers } from 'redux';
import videosReducer from './videos_reducer'
import genresReducer from './genres_reducer';
import listsReducer from './list_reducer';
import searchReducer from './search_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    genres: genresReducer,
    list: listsReducer,
    search: searchReducer
});

export default entitiesReducer;
