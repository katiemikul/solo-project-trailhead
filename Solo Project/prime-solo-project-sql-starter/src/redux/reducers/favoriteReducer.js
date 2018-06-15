import { combineReducers } from 'redux';
import axios from 'axios';

const favoriteList = {
    favorite: false,
}

const favoriteReducer = (state= favoriteList, action) => {
    let favorite = {favorite: action.payload}
    if (action.type === 'POST_TRAIL' && state[action.payload] === false) {
      axios({
        method: 'POST',
        url: '/api/favorite',
        data: trait
      }).then((response) => {
        console.log('Success on favorite trails post')
        
      }).catch((error) => {
        console.log('Error on the favorite trails post:', error);
      });
      return {...state, [action.payload]: true};
    }else if(action.type === 'DELETE_TRAIL' && state[action.payload] === true){
      axios({
        method: 'DELETE',
        url: '/api/favorite',
        data: trait
      }).then((response) => {
        console.log('Success on favorite trails delete')
      }).catch((error) => {
        console.log('Error on deleting a favorite trail:', error);
      });
      return {...state, [action.payload]: false};
    }
    return state; 
  }

  export default combineReducers({
    favoriteReducer,
  });