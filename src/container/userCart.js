import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { getUser, deleteStaffById, removeUser } from '../action/getUser'

import UserCartRender from '../components/userCartRender'
import MyProfile from '../components/myProfile'

import Loader from 'react-loader-spinner';

class marketPlace extends Component {
   constructor(props){
       super(props)
       this.state = {mark: false}
   }
    componentDidUpdate(prevProps){   
        if(prevProps.del !== this.props.del){
            const { getUser } = this.props
        let user = JSON.parse(localStorage.getItem("id")); 
            getUser(user)
        } 
    }
    componentDidMount(){
        const { getUser } = this.props
        let user = JSON.parse(localStorage.getItem("id"));
        if (user === null) {
            this.setState({mark:true})
        } else {
            getUser(user)
        }
    }
   
    render() {
        const { user, deleteStaffById, isFetching, removeUser } = this.props  
        return (
            <div className="menuAndContent"> 
                {isFetching ? <div className="loader"> <Loader type="ThreeDots"
                                     color="#004740"
                                     height={100}
                                     width={100}
                              /> </div> :
                <div style={{ "width": '100%' }}>
                    <MyProfile user = { user } removeUser = {removeUser} mark = {true}/>
                        <div className="menuAndContent">
                         { !this.state.mark  ? <UserCartRender user = { user } deleteStaffById = { deleteStaffById }/> : <Link to="/login">log in please</Link>}
                        </div>   
                </div>
                } 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.getUser.isFetching,
    user: state.getUser.user,
    del: state.getUser.del,
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({ getUser, deleteStaffById, removeUser }, dispatch);
  
  export default marketPlace = connect(
      mapStateToProps,
      mapDispatchToProps
  )(marketPlace);