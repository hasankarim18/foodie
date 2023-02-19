import React, { useEffect, useState } from "react";
import DishDetails from "./DishDetails";
import DishItem from "./DishItem";
import DetailModal from "../utils/DetailModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishes } from "../../redux/actionCreators";
import Loading from '../../components/utils/Loading'

const Dishes = () => {
  const { dishes , isLoading} = useSelector((state) => state.dishes);
  const dispatch = useDispatch()

  useEffect(()=> {
      dispatch(fetchDishes())
  }, [dispatch])

  const [selectedDish, setSelectedDish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  //onst dishes = dishState.dishes.dishes;

 // console.log(dishes);

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


     let showSelectedDish = null;

     if (selectedDish) {
       showSelectedDish = <DishDetails dishDetail={selectedDish} />;
     }
     // loading login
    let showDishes = null;

    if(isLoading === true){
      showDishes = <Loading />
    }else {
     showDishes = dishes.map((item) => {
       return (
         <DishItem
           openDishDetail={modalToggle}
           key={item.id}
           selectDish={selectDish}
           dish={item}
         />
       );
     });
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
