import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { getStaffs } from '../action/staffs'
import { AddNewStaffAction } from '../action/addStaffToCart'
import { getUser, removeUser } from '../action/getUser'

import StaffMarketRender from '../components/staffMarketRender'
import MyProfile from '../components/myProfile'

import Loader from 'react-loader-spinner';

import Modal from "../components/Modal";

class marketPlace extends Component {
    constructor(props){
        super(props)
         
        this.state = {showButton: null, showModal: false, mark:false}
    }
    componentDidUpdate(prevProps){ 
        if(prevProps.staffResponce !== this.props.staffResponce){
            const { getUser } = this.props
            let user = JSON.parse(localStorage.getItem("id"));
                getUser(user)
            } 
        } 
    componentDidMount(){
        const { getStaffs, getUser } = this.props
        getStaffs()
        let user = JSON.parse(localStorage.getItem("id"));
        if (user === null) {
            this.setState({mark:true})
        } else {
            getUser(user)
        }
    }
    showModal = () =>{
        this.setState({modal : true}) 
    }
    closeEditModal = () => {
        this.setState({modal : false})
    }
    addStaff = element => {  
        const {id, staff, title, price } = element
        const { AddNewStaffAction, staffs } = this.props
        let user = JSON.parse(localStorage.getItem("id"));
        let obj = {
            "description" : `thrthdghgf ${id}`,
            "price" : price,
            "title" : title,
            "staff" : staff,
            "userId" : user,
        }
        if (JSON.parse(localStorage.getItem(id)) === null){
            AddNewStaffAction(obj)
            localStorage.setItem(id,JSON.stringify(id))  
            this.showModal()
        }
        else if (JSON.parse(localStorage.getItem(id)) === id){ 
            const showButton  = staffs.concat()
            const mark = showButton.find(el=> el.id === id) 
            mark.trigger = true;
            this.setState({showButton})
        }
    }
    render() {
        const { staffs, user, isFetching, removeUser } = this.props 
        return (
            <div className="menuAndContent"> 
                {isFetching ? <div className="loader"> <Loader type="ThreeDots"
                                     color="#004740"
                                     height={100}
                                     width={100}
                              /> </div> :
                <div style={{ "width": '100%' }}>  
                    <MyProfile user = {user} removeUser = { removeUser }   />
                    {this.state.mark && <Link to="/login">log in please</Link>} 
                        <div className="menuAndContent">
                            
                            <div className="contentStaffs">
                                <div className="staffs">         
                                    {staffs.map((el,key) => (
                                        !el.userId && <StaffMarketRender  key = {key} mark = {this.state.mark} id = {el.id} title = { el.title } price = { el.price } addStaff = { this.addStaff } trigger={el.trigger} staff = { el.staff } />
                                    ))
                                    }                 
                                </div>
                            </div>
                        </div>
                </div>   
                }
                <Modal visible={this.state.modal}
                    onOk={this.closeEditModal}
                    onCancel={this.closeEditModal}
                    msg = "item added"
                    data = { true }
                />  
            </div>  
        );
    }
}

const mapStateToProps = state => ({
    staffs: state.staffs.staffs,
    user: state.getUser.user,
    staffResponce: state.addNewStaff.staffResponce,
    isFetching: state.staffs.isFetching,
    
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({ getStaffs, AddNewStaffAction, getUser, removeUser }, dispatch);
  
  export default marketPlace = connect(
      mapStateToProps,
      mapDispatchToProps
  )(marketPlace);