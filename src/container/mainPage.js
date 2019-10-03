import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import Loader from 'react-loader-spinner';

import MyProfile from '../components/myProfile'

import { getUser, removeUser } from '../action/getUser'

class MainPage extends Component {
    constructor(props){
        super(props)
        this.state = {mark: false}
    }
    componentDidUpdate(prevProps){
        console.log(1)
        console.log(this.props, prevProps)
    if(this.props.remove !== prevProps.remove){
        this.setState({mark: true})
    }
    }
    componentDidMount(){
        const { getUser } = this.props
        let user = JSON.parse(localStorage.getItem("id"));
        if (user === null) {
           
        } else {
            getUser(user)
        }
        
    } 
    render() {
       
        const { user, isFetching, removeUser } = this.props
        return (
            <div className="menuAndContent">
                {isFetching ? <div className="loader"> <Loader type="ThreeDots"
                                     color="#004740"
                                     height={100}
                                     width={100}
                              /> </div> :  
                <MyProfile user = { user } removeUser = {removeUser} st = {this.state.mark} /> 
                } 
            </div>
        );
    }
}

const mapStateToProps = state => ({
  user: state.getUser.user,
  isFetching: state.getUser.isFetching,
  remove: state.getUser.remove
});

const mapDispatchToProps = dispatch => bindActionCreators({ getUser, removeUser }, dispatch);

export default MainPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);