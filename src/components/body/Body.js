import React from 'react'
import Menu from '../pages/Menu'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Home from '../pages/Home';
import { Redirect, Route, Switch } from 'react-router-dom'

const Body = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect exact to="/home" />
        </Route>
        <Route exact path="/about" render={()=> { return <About />}} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/menu" >
          <Menu />
        </Route>
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default Body