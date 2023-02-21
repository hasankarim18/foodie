import React, {  useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addComment, commentAddedFailed } from '../../redux/actionCreators';
import CountDown from '../utils/CountDown';


const CommentForm = ({dishId}) => {
const { isCommentAddedFailed } = useSelector((state) => state.comments);


 const dispatch =  useDispatch();
  const [formData, setFormData] = useState({
    author: "",
    rating: 3,
    comment: "",
    dishId: dishId,
  });

const onSubmit = (e)=> {
    e.preventDefault() 
    // dispatching the fromData action from the actionCreators
    const comment = formData;
    dispatch(addComment(comment))
   
        setFormData({
        author: "",
        rating: 3,
        comment: "",
        dishId: dishId,
        });    
}


    const handleInputChange = (e)=> {
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      })
    }

    useEffect(()=> {
      setTimeout(() => {
        dispatch(commentAddedFailed(false));
      }, 5000);
    }, [dispatch, isCommentAddedFailed])


  return (
    <div className="mb-5">
      <div className="container-fluid">
        <form onSubmit={onSubmit}>
          <input
            className="form-control mb-3"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <select
            className="form-control mb-3"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            placeholder="rating"
            max="5"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <textarea
            className="form-control mb-3"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            placeholder="Comment"
            required
          />
          <div className="from-group">
            <button type="submit" className="btn btn-success">
              Add Comment
            </button>
          </div>
        </form>
      </div>
      {isCommentAddedFailed ? (
        <div className="p-3 alert alert-danger">
          <div className="d-flex justify-content-between" >
            <span>Something went wrong! try again</span>
            <CountDown />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CommentForm