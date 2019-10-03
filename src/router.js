import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Registration from './container/registration'
import Login from './container/authorisation'
import MainPage from './container/mainPage'
import MarketPlace from './container/marketPlace'

import UserCart from './container/userCart'
import CreateStaff from './container/addStaff'

class Router extends Component {

   render() {
  
       return (
    <Fragment>
	    <Switch>
       <Route path="/login" exact component={ Login } />
         <Route path="/" exact component={ MainPage } />
            
            <Route path="/registration" exact component={ Registration } />
            <Route path="/market" exact component={ MarketPlace } />
            <Route path="/cart" exact component={ UserCart } />
            <Route path="/admin" exact component={ CreateStaff } />
	    </Switch>
    </Fragment>
       )
   }

}


export default Router


