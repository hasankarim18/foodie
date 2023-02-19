import axios from "axios";
import React, { useEffect } from "react";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const MainComponents = () => {


  useEffect(()=> {
    axios.get("http://localhost:9000/dishes")
    .then(res => res.data)
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

   



  }, [])

  const addDish = ()=> {
    const dish = {
      name: "Kachi Biryani",
      price:450,
    };
    axios.post("http://localhost:9000/dishes",dish)
    .then((res)=> console.log(res))
    .catch((error)=> console.log(error))
  }

  const updateDish = ()=> {
    const id = 3;
    const updatedDish = {
      name: "Morog Polau",
      price:250
    };
     axios
       .put(`http://localhost:9000/dishes/${id}`, updatedDish)
       .then((res) => console.log(res))
       .catch((error) => console.log(error));
  }

  const deleteDish = ()=> {
     const id = 3;    
     axios
       .delete(`http://localhost:9000/dishes/${id}`)
       .then((res) => console.log(res))
       .catch((error) => console.log(error));
  }


  return (
    <div>
      <Header />
      <div className="p-5" > 
          <button onClick={()=> {addDish()}} className="btn btn-success m-2" >Add Dish</button>
          <button onClick={()=> {updateDish()}} className="btn btn-warning m-2" >Update Dish</button>
          <button onClick={()=> {deleteDish()}} className="btn btn-danger m-2" >Delete Dish id:3</button>
      </div>    
      <Body />
      <Footer />
    </div>
  );
};

export default MainComponents;
