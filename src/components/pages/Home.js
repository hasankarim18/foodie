import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    homeCounter: state.homeCounter,
    reloaded:state.reloaded
  };
};

class Home extends Component {
  increaseByFive = () => {
    this.props.dispatch({
      type: "INCREASEBYFIVE",
      payload: 5,
    });
  };

  decreaseByFive = () => {
    this.props.dispatch({
      type: "DECREASEBYFIVE",
      payload: 5,
    });
  };

  componentDidMount() {
    console.log("Home state", this.state);
    console.log("Home props", this.props);
  
  }

  render() {
    return (
      <div>
        <div className="container">
        
          <h1>This is home page</h1>
          <div className="">
            {" "}
            <span className="fs-2">{this.props.homeCounter}</span>{" "}
          </div>
          <div className="btn-group" >
            <button onClick={()=> this.increaseByFive()} className="btn btn-success">Increase by five</button>
            <button onClick={()=> this.decreaseByFive()} className="btn btn-danger">Increase by five</button>
           </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
