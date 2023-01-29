import React, { useState } from "react";
import { Card,CardHeader,CardFooter, CardImg, CardBody, CardTitle } from "reactstrap";
import CollapseUtil from "../utils/CollapseUtil";
import Comments from "./Comments";



const DishDetails = ({ dishDetail }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false)
  const {name, description, image, category, label, price,comments} = dishDetail;

  const commentToggle = ()=> {
    setIsCommentOpen((prev)=> !prev)
  }

  return (
    <div className="mt-2 ">
      <Card>
        <CardHeader>
          <CardTitle className="fs-2 text-warning text-center">
            {name}
          </CardTitle>
        </CardHeader>
        <CardImg src={image} />
        <CardBody className="">
          <div className="d-flex mt-2 justify-content-between text-capitalize">
            <div className="">
              {label ? <span className="fs-4">Label: {label}</span> : null}
            </div>
            <div className="">
              {category ? (
                <span className="fs-4">Category: {category}</span>
              ) : null}
            </div>
          </div>
          <p align="justify" className="text-justified mt-3">
            <span className="text-warning fw-bold">Dish detail: </span>
            {description}
          </p>
        </CardBody>
        <CardFooter>
          <h1 className="text-danger text-end">
            <u>Price:{price}/-</u>
          </h1>
        </CardFooter>
      </Card>
      <div className="mt-4">
        <h2 className="cursor-pointer d-flex align-items-center" onClick={commentToggle}>
          <span className="me-3">Show Comments:</span>
          <i className="fa-solid fa-chevron-down"></i>
        </h2>
        <CollapseUtil isOpen={isCommentOpen}>
          <Comments comments={comments} />
        </CollapseUtil>
      </div>
    </div>
  );
};

export default DishDetails;