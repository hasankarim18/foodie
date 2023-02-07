import React, { useState } from "react";
import DishDetails from "./DishDetails";
import DishItem from "./DishItem";
import DetailModal from "../utils/DetailModal";
import { useSelector } from "react-redux";

const Dishes = () => {
  const state =  useSelector((state)=> state)

  const [selectedDish, setSelectedDish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const dishes = state.dishes;

  const selectDish = (id) => {
    const selectedId = id;
    const seletedDish = dishes.find((item)=> {
      return item.id === selectedId 
    })
    setSelectedDish(() => seletedDish);
  };
   const modalToggle = () => {
      setIsModalOpen((prev)=> !prev);
    };

    const showDishes = dishes.map((item)=> {
        return (
          <DishItem
            openDishDetail={modalToggle}
            key={item.id}
            selectDish={selectDish}
            dish={item}
          />
        );
    })


    let showSelectedDish = null;

    if(selectedDish){
      showSelectedDish = <DishDetails dishDetail={selectedDish} />;
    }

  return (
    <div className="container">
      <div className="row">{showDishes}</div>
      {/*dish detail modal  */}
      <div>
        <DetailModal toggle={modalToggle} isOpen={isModalOpen} >
            {showSelectedDish}
        </DetailModal>
      </div>
    </div>
  );
};

export default Dishes;
