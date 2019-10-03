import React, { Component } from 'react';

import { Link } from "react-router-dom"

class staffMarketRender extends Component {

    render() {
        const {  staff, addStaff, id, title, price, trigger, mark } = this.props
        const classNames = ["showCart"]
        if(trigger){
            classNames.push("marked")
        }
        return (
            <div className="staff"> 
               { mark || <button onClick = {() => addStaff({id,title,price,staff})} className = "addToCart" >add to cart</button>}
                <Link to="/cart"><button className={classNames.join(" ")} >go to cart</button></Link>
                <img src = {staff.split(",")[0]} width="325" height="190" className="imgStaff"  alt="lorem" />
                <div className="titlleAndPrice">
                    <h4>{title}</h4>
                    <h4>Цена: {price}</h4>                      
                </div> 
            </div>
                  
        );
    }
}

export default staffMarketRender;

