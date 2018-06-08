import { combineReducers } from 'redux';

const trail_name = {
    trail_name: '',
}

const searchDetails = (state = trail_name, action) => {
    if (action.type === 'DETAILED_TRAILS') {
        return action.payload;
    // } else if (action.type === 'FEEDBACK_COMPREHENSION') {

    //     return {...state, ...action.payload};
    // } else if (action.type === 'FEEDBACK_SUPPORT') {

    // return {...state, ...action.payload};
    // } else if (action.type === 'FEEDBACK_COMMENTS') {

    // return {...state, ...action.payload};
}
    return state;
}

export default combineReducers({
  searchDetails,
});