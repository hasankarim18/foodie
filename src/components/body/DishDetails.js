import React from "react";
import { Card,CardHeader,CardFooter, CardImg, CardBody, CardTitle } from "reactstrap";
import Comments from "./Comments";


const DishDetails = ({ dishDetail }) => {
  console.log(dishDetail);
  const {name, description, image, category, label, price,comments} = dishDetail;
  return (
    <div className="mt-2">
      <Card>
        <CardHeader>
          <CardTitle className="fs-2 text-warning text-center">
            {name}
          </CardTitle>
        </CardHeader>
        <CardBody className="">
          <CardImg src={image} />
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
        <h2>Comments: </h2>
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default DishDetails;
