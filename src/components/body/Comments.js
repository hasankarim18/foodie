import React, { useEffect, useState } from 'react'
import dateFormat from "dateformat";
import { Spinner } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../redux/actionCreators';

const Comments = ({ dishId }) => {
  const allComments = useSelector((state) => state.comments.comments);
  const { commentLoadError } = useSelector((state) => state.comments);

  const dispatch = useDispatch()

  // console.log('allcomments: ',allComments);

 const [comments,setComments ] = useState([])  




 useEffect(()=> {
  dispatch(fetchComments());
 }, [dispatch])

// selecting id
 useEffect(()=> {
   if(allComments.length > 0){
       const selectedComments = allComments.filter((item) => {
         return item.dishId === dishId;
       });
       setComments(selectedComments);
   }
 }, [allComments,dishId])


 if(comments.length > 0){
   const shwoComment = comments.map((item) => {
     let output = [];

     function getStars(rating) {
       // Round to nearest half
       rating = Math.round(rating * 2) / 2;

       // Append all the filled whole stars
       for (var i = rating; i >= 1; i--)
         output.push(`<i class="fa-solid fa-star" style="color:gold;" ></i>`);

       // If there is a half a star, append it
       if (i === 0.5)
         output.push(
           '<i class="fa-regular fa-star-half" style="color:gold;" ></i>'
         );

       // Fill the empty stars
       for (let i = 5 - rating; i >= 1; i--)
         output.push('<i class="fa-regular fa-star" style="color:gold;" ></i>');

       // return output.join("");
       return output.join("");
     }

     let numStars = getStars(item.rating);

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
             <i>
               <u>Date: </u>
             </i>
             {dateFormat(item.date, "dd, mmm, yyyy")}
           </div>
           <div className="rating">
             <i>
               <u>Rating: </u>
             </i>
             <div
               dangerouslySetInnerHTML={{
                 __html: numStars,
               }}
             />
           </div>
         </div>
       </div>
     );
   });
   return shwoComment;
 }else if(commentLoadError !== null){
  return (
    <div className="alert alert-danger text-center">{commentLoadError}</div>
  );
 }
 else {
  return <Spinner />
 }
};

export default Comments