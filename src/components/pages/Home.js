import React, { Component } from 'react'
import { connect } from 'react-redux';


const mapStateToProps = (state)=> {
  return {
    dishes:state.dishes
  }
}

 class Home extends Component {

  componentDidMount(){
    console.log('Home state', this.state);
    console.log('Home props', this.props);
  }


  render() {
    return (
      <div>
        <div className="container" >
           <h1>This is home page</h1>
          </div>
      </div>
    )
  }
}


export default connect(mapStateToProps)(Home);
