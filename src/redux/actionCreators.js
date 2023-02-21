import * as actionTypes from './actionTypes.js'
import {baseUrl} from './baseUrl';
import axios from 'axios';




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

// catch error in dishloading 

const dishLoadingError = (errMessage)=> {
  return {
    type: actionTypes.LOAD_DISH_ERROR,
    payload: errMessage
  };
}

/*
  1. This function will return another function whick will take dispatch as it's paramenter
*/
// We define another function which will return dispatch and call the two function  // we are calling dispatch inside of a dispatch which normal redux does not support that's why we need redux thunk

export const fetchDishes = ()=> {
    return dispatch => {
      dispatch(dishesLoading())

      axios.get(baseUrl+'/dishes')
      .then((res)=> {
     //   console.log(res.data);
      //  console.log(res);
        if(res.status === 200){
            const data = res.data;
            dispatch(loadDishes(data));
        }      
      })
      .catch((err)=> {
      //  console.log(err.message);
        dispatch(dishLoadingError(err.message));
      })
   
    }
}


// fetch comments 

//1. comment loading 

const commentLoading = ()=> {
  return {
    type:actionTypes.LOADING_COMMENTS
  }
}

//2. load comments 
const loadComments = (comments) => {
  return {
    type: actionTypes.LOAD_COMMENTS,
    payload: comments,
  };
};

//3. catch the loading errror 

const loadCommentsError = (errMess)=> {
  return {
    type:actionTypes.LOAD_COMMENTS_ERROR,
    payload:errMess
  }
}

// 4. fetch comments with thunk 


export const fetchComments = ()=> dispatch => {
      dispatch(commentLoading());

    axios.get(baseUrl+'/comments')
    .then((res)=> {
      const data = res.data 
     // console.log(data);
      dispatch(loadComments(data));
    })
    .catch((err)=> {
      dispatch(loadCommentsError(err.message));
    })
}
