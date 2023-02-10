import * as actionTypes from './actionTypes.js'


export const addComment = (formData) => {
  formData.date = new Date().toDateString();
  return {
    type: actionTypes.ADD_COMMENT,
    payload: formData,
  };
};


