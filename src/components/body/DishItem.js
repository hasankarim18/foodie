import React from 'react'
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const DishItem = ({dish}) => {
    const { name, image } = dish;
    console.log(dish.name);
  return (
    <div className="col-12">
      <div className="m-2">
        <Card className="">
          <CardBody className="p-0 cursor-pointer">
            <CardImg src={image} />
            <CardImgOverlay className="bg-dark opacity-50"> </CardImgOverlay>
            <CardImgOverlay className="d-flex justify-content-center align-items-center">
              <CardTitle className="text-white fs-3 ">{name}</CardTitle>
            </CardImgOverlay>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default DishItem