import React from 'react'
import dateFormat from "dateformat";

const Comments = ({ comments }) => {
  console.log(comments);
 const shwoComment = comments.map((item)=> {
    return (
      <div className="mb-2" key={item.id}>
        <h4>{item.author}</h4>
        <p className="" align="justify">
        <i>Comment: </i>  {item.comment}
        </p>
        <div className="d-flex justify-content-between">
          <div className="date" > 
            {
              dateFormat(item.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")
            }
          </div>
          <div className="rating" > Rating: {item.rating} <i class="fa-solid fa-star"></i> </div>
        </div>
      </div>
    );
 })
  return shwoComment;
};

export default Comments