import React, { useEffect, useState } from 'react'
import dateFormat from "dateformat";
import { Spinner } from 'reactstrap';
import { useSelector } from 'react-redux';

const Comments = ({ dishId }) => {
  const allComments = useSelector((state) => state.comments);
 const [comments,setComments ] = useState([])  
 const [load , setLoad] = useState(false);



 useEffect(()=> {
   setTimeout(() => {
     setLoad(true);
   }, 2000);

  if(load){
  const selectedComments = allComments.filter((item) => {
    return item.dishId === dishId;
  });
    setComments(selectedComments);
}
 }, [load, dishId, allComments])

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
 }else {
  return <Spinner />
 }
};

export default Comments