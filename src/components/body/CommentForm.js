import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../redux/actionCreators';


const CommentForm = ({dishId}) => {
// const state = useSelector((state) => state);
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
    dispatch(addComment(formData))
    // clearing the form data
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
            <option value="1" >1</option>
            <option value="2" >2</option>
            <option  value="3" >3</option>
            <option value="4" >4</option>
            <option value="5" >5</option>
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
    </div>
  );
}

export default CommentForm