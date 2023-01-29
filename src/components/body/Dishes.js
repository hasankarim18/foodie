import React from "react";
import DISHES from '../../data/dishes';
import DishItem from "./DishItem";

const Dishes = () => {
    const dishes = DISHES;
    const showDishes = dishes.map((item)=> {
        return <DishItem key={item.id} dish={item} />
    })
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="row">{showDishes}</div>
        </div>
        <div className="col-6">dish detail </div>
      </div>
    </div>
  );
};

export default Dishes;
