import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";
import { combineReducers } from "redux";


const dishReducer = (state=DISHES, action)=> {
  return state;
}

const commentReducer = (state=COMMENTS,action)=> {
    switch (action.type) {
      case "ADDDISHCOMMENT":
        let comment = action.payload;
        comment.id = state.length;
        console.log("comment", comment);
        return state.concat(comment)
      default:
        return state;
    }
}



const Reducer = combineReducers({
  dishes:dishReducer,
  comments:commentReducer
})



export default Reducer;

