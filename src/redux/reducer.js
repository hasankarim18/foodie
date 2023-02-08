import DISHES from "../data/dishes";
import COMMENTS from "../data/comments";

const initialState = {
    dishes:DISHES,
    comments:COMMENTS, 
    homeCounter:0,
   // dishComment:{}

}


const Reducer = (state = initialState, action)=> {
    switch (action.type) {
      case "INCREASEBYFIVE":
        return{
            ...state,
            homeCounter:state.homeCounter + action.payload
        }

      case "DECREASEBYFIVE":
        return {
          ...state,
          homeCounter: state.homeCounter - action.payload,
        };
      case "RELOAD":
        return{
            ...state,
            reloaded:state.reloaded+1
        }
      case "ADDDISHCOMMENT":
        let comment = action.payload;
        comment.id = state.comments.length;
        comment.date = new Date().toDateString();
        console.log(typeof comment);
        console.log('comment',comment);
        return {
          ...state,
          comments:state.comments.concat(comment)
        }
      default:
       return state;
    }
  
}



export default Reducer;

