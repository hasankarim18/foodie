import * as actionTypes from './actionTypes.js'
import DISHES from '../data/dishes.js';


export const addComment = (formData) => {
  formData.date = new Date().toDateString();
  return {
    type: actionTypes.ADD_COMMENT,
    payload: formData,
  };
};



export const loadDishes = (dishes)=> {
  return{
    type: actionTypes.LOAD_DISHES,
    payload:dishes
  }
}


export const dishesLoading =  ()=> {
  return {
    type:actionTypes.DISHES_LOADING
  }
}

/*
  1. This function will return another function whick will take dispatch as it's paramenter
*/
// We define another function which will return dispatch and call the two function  // we are calling dispatch inside of a dispatch which normal redux does not support that's why we need redux thunk

export const fetchDishes = ()=> {
    return dispatch => {
      dispatch(dishesLoading())

      setTimeout(() => {
        dispatch(loadDishes(DISHES));
      }, 2000);



    }
}