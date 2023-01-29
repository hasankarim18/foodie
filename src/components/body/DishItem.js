import React from 'react'
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const DishItem = ({ dish, selectDish,openDishDetail }) => {
  const { name, image, id } = dish;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="m-2">
        <Card className="">
          <CardBody
            onClick={() => {
              selectDish(id);
              openDishDetail()
            }}
            className="p-0 cursor-pointer menu_card"
          >
            <CardImg className="card_img" src={image} />
            <CardImgOverlay className="bg-dark opacity-50"> </CardImgOverlay>
            <CardImgOverlay className="d-flex justify-content-center align-items-center">
              <CardTitle className="card_title fs-3">{name}</CardTitle>
            </CardImgOverlay>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DishItem