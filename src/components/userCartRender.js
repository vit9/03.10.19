import React, { Component } from 'react';

import deleteFunc from '../deleteFunction/'

import { Link } from "react-router-dom"


class userCartRender extends Component {
   constructor(props){
     super(props)
     this.state = {mark: false}
   }
  
   componentDidMount(){
      if(localStorage.length === 1){
        this.setState({mark: true})
      }
   }
  removeCart = (el) => {
      const { description, id } = el
      const { deleteStaffById } = this.props
        
      localStorage.removeItem(+description.replace(/[A-Z a-z]/g,""))
        if(localStorage.length === 1){
          this.setState({mark: true})
        }
      deleteFunc(id, deleteStaffById )
  }
  render() {
    const { user } = this.props
    return (
      <div className="contentStaffs">
        <div className="staffs">         
          {user.staffs && user.staffs.map((el,key) => (
            <div className="staff" key = {key}> 
              <button onClick = {() => this.removeCart(el)} className = "addToCart"  >remove from cart</button>
              <img src = {el.staff.split(",")[0]} width="325" height="190" className="imgStaff"  alt="lorem" />
              <div className="titlleAndPrice">
                <h4>{el.title}</h4>
                <h4>Цена: {el.price}</h4>                      
              </div>   
            </div>
          ))
          }                 
        </div>
        {this.state.mark ? <p>Nothing added to cart <br/> add some at <Link to="/market">market</Link></p> : null}
      </div> 
        );
    }
}

export default userCartRender;     