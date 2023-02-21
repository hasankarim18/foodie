import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddTest = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState({
        status:false,
        message:null
    });
    const [alert ,setAlert] = useState(true)
    const [state, setState] = useState({
        name:"",
        price:""        
    })

    const inputHandler = (e)=> {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=> {
        e.preventDefault()
        console.log(state)
        axios.post("http://localhost:9000/dishtest", state)
        .then(res => {
           
            if(res.status === 201){
                setSuccess(true)
                setAlert(true)
                setState({
                  name: "",
                  price: ""
                });
            }
        } )
        .catch(err => {
            setError({
              ...error,
              status: true,
              message: err.message,
            });
        })
    }

    useEffect(()=> {
        setTimeout(() => {
            setAlert(false)
        }, 5000);

        if(!alert){
            setSuccess(false)
        }

    }, [alert, success])

  return (
    <div>
      <div className="col-12 col-md-6">
        <form onSubmit={submitHandler}>
          <div className="form-group mb-3">
            <label>Dish Name</label>
            <input
              onChange={inputHandler}
              type="text"
              className="form-control"
              name="name"
              value={state.name}
            />
          </div>
          <div className="form-group mb-3">
            <label>Price</label>
            <input
              onChange={inputHandler}
              type="number"
              className="form-control"
              name="price"
              value={state.price}
            />
          </div>
          <button className="btn btn-success text-white">Add dish</button>
        </form>
        {success ? <div className="mt-2 mb-2 alert alert-success"> Dish Added successfully </div>: null
        }
        {error.status ? <div className="text-center mt-2 mb-2  text-white alert alert-danger"> {error.message} </div>:null}
      </div>
    </div>
  );
}

export default AddTest