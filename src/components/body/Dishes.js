import React, { useState } from "react";
import DISHES from '../../data/dishes';
import DishDetails from "./DishDetails";
import DishItem from "./DishItem";

const Dishes = () => {
  const [selectedDish, setSelectedDish] = useState(null);
  
  const dishes = DISHES;

  const selectDish = (id) => {
    const selectedId = id;
    const seletedDish = dishes.find((item)=> {
      return item.id === selectedId 
    })
    setSelectedDish(() => seletedDish);
  };

    const showDishes = dishes.map((item)=> {
        return <DishItem key={item.id} selectDish={selectDish} dish={item} />
    })


    let showSelectedDish = null;

    if(selectedDish){
      showSelectedDish = <DishDetails dishDetail={selectedDish} />;
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="row">{showDishes}</div>
        </div>
        <div className="col-6">{showSelectedDish}</div>
      </div>
    </div>
  );
};

export default Dishes;
