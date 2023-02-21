import React from 'react'

const DishTest = ({name,price}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card p-3">
        <h3 className="text-capitalize">{name}</h3>
        <div className="d-flex justify-content-between">
          <h6 className="text-danger">Taka: {price}/-</h6>
          <div>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishTest