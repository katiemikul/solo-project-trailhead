import { combineReducers } from 'redux';

const searchTrails = (state = {}, action) => {
    if (action.type === 'SEARCH_TRAILS') {
        return action.payload;
    } else if (action.type === 'CLEAR_SEARCH') {
        // THIS PART IS JUST IN CASE WE FEEL LIKE
        // ADDING IT ON LATER
        return {};
    }
    return state;
}

export default combineReducers({
  searchTrails,
});