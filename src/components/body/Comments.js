import React from 'react'
import dateFormat from "dateformat";

const Comments = ({ comments }) => {
 const shwoComment = comments.map((item)=> {
    return (
      <div className="mb-2 pb-3 border-bottom border-primary" key={item.id}>
        <h4>
          <u>Author:</u> {item.author}
        </h4>
        <p className="" align="justify">
          <i>
            <u>Comment:</u>{" "}
          </i>{" "}
          {item.comment}
        </p>
        <div className="d-flex justify-content-between">
          <div className="date">
           <i><u>Date: </u></i> {dateFormat(item.date, "dd, mmm, yyyy")}
          </div>
          <div className="rating">
            <i><u>Rating: </u></i> {item.rating} <i class="fa-solid fa-star"></i>{" "}
          </div>
        </div>
      </div>
    );
 })
  return shwoComment;
};

export default Comments