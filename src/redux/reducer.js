import * as actionTypes from "./actionTypes";

import { combineReducers } from "redux";


const dishState = {
  isLoading:false,
  dishes:[],
  dishLoadError:null
}

const dishReducer = (state = dishState, action) => {
  switch (action.type) {
    case actionTypes.DISHES_LOADING:
      return {
        ...state,
        isLoading: true,
        dishes: [],
        dishLoadError:null
      };
    case actionTypes.LOAD_DISHES:
      return {
        ...state,
        isLoading: false,
        dishes: action.payload,
        dishLoadError:null
      };
    case actionTypes.LOAD_DISH_ERROR:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        dishes: [],
        dishLoadError:action.payload
      };
    default:
     return state
  }
};


const commentState = {
  isLoading:false,
  comments:[],
  commentLoadError:null,
  commentAdding:false,
  commentAdded:null,
  isCommentAddedFailed:false
}



const commentReducer = (state = commentState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      let comment = action.payload;
      comment.id = state.comments.length;
      // console.log(state.comments);
      return{
        ...state,
        comments:state.comments.concat(comment)
      }
    case actionTypes.LOADING_COMMENTS:
      return {
        ...state,
        comments:[],
        isLoading:true,
        commentLoadError:null
      }
      case actionTypes.LOAD_COMMENTS:
        return {
          ...state,
          comments:action.payload,
          isLoading:false,
          commentLoadError:null
        }
      case actionTypes.LOAD_COMMENTS_ERROR:
        return {
          ...state,
           comments:[],
          isLoading:false,         
          commentLoadError:action.payload
        }
      case actionTypes.COMMENT_ADDED_FAILED:
        return {
          ...state,
          isCommentAddedFailed: action.payload,
        };
    default:
      return state;
  }
};

const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});

export default Reducer;
