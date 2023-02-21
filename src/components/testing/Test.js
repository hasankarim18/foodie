import React, {useEffect, useState} from 'react'
import axios from 'axios';
import AddTest from './AddTest';
import DishTest from './DishTest';

const Test = () => {

  const [dishes, setDishes] = useState(null)
  const [error, setError] = useState(null);

    useEffect(() => {
      axios
        .get("http://localhost:9000/dishtest")
        .then((res) => res.data)
        .then((data) =>{
          setDishes(data)
        })
        .catch((err) => {
          setError(err)
        });
      },[]);

    useEffect(() => {
    //  console.log(dishes);
    //  console.log('error: ',error)
    }, [dishes,error]);   

    let showTestDishes = null;

    if(dishes !== null ){
      showTestDishes = dishes.map((item)=> {
        return (
         
            <DishTest key={item.id} price={item.price} name={item.name} />
         
        );
      })
    }

  return (
    <div className="container">
      <div className="p-5">
        <AddTest />
      </div>
      <section className="mt-5">
        <div className="row m-5">{showTestDishes}</div>
        {error ? (
          <div className="text-center alert alert-danger text-white fs-1">
            {error.message}
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default Test