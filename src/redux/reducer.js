import * as actionTypes from "./actionTypes";

// import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
import { combineReducers } from "redux";


const dishState = {
  isLoading:false,
  dishes:[]
}

const dishReducer = (state = dishState, action) => {
  switch (action.type) {
    case actionTypes.DISHES_LOADING:
      return {
        ...state,
        isLoading: true,
        dishes: [],
      };
    case actionTypes.LOAD_DISHES:
      return {
        ...state,
        isLoading: false,
        dishes: action.payload,
      };
    default:
     return state
  }

};

const commentReducer = (state = COMMENTS, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      let comment = action.payload;
      comment.id = state.length;
   
      return state.concat(comment);
    default:
      return state;
  }
};

const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});

export default Reducer;
