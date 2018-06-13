import { combineReducers } from 'redux';

const trail_name = {
    trail_name: '',
}

const searchDetails = (state = trail_name, action) => {
    if (action.type === 'DETAILED_TRAILS') {
        return action.payload;
}
    return state;
}

// const favorites = (state = [], action) => {

//     switch (action.type) {
//       case USER_ACTIONS.SET_FAVORITES:
//         return action.user.favorites;
//       case USER_ACTIONS.ADD_FAVORITE:
//         // console.log('new favorite list', [...state, action.payload]);
//         return [...state, action.payload]
//       default:
//         return state;
//     }
//   };

export default combineReducers({
  searchDetails,
});