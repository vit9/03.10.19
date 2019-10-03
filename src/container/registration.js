import React, { Component, Fragment } from "react";

import { bindActionCreators } from "redux";
import { Redirect } from "react-router"
import { connect } from 'react-redux';

import Registr from "../components/registrationPage";

import { userRegistration } from '../action/userRegistration'

import Modal from "../components/Modal";

class RenderRegistration extends Component { 
    constructor(props){
      super(props)
      this.state = {redirect: false, modal:false}
   
    }
    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/login' />
      }
    }
    showModal = () =>{
      this.setState({modal : true}) 
    }
    closeEditModal = () => {
      this.setState({modal : false})
        this.setRedirect() 
    } 
    render() {  
      const { userRegistration } = this.props
      return (
        <Fragment>
           {this.renderRedirect()}
          <Registr userRegistration = { userRegistration } showModal = { this.showModal } />
          <Modal visible={this.state.modal}
                    onOk={this.closeEditModal}
                    onCancel={this.closeEditModal}
                    msg = "You have successfully registered"
                    data = {true}
          />
        </Fragment>       
      );
    }
}


const mapStateToProps = state => ({
  responce: state.userRegistr.responce
});

const mapDispatchToProps = dispatch => bindActionCreators({ userRegistration }, dispatch);

export default RenderRegistration = connect(
    mapStateToProps,
    mapDispatchToProps
)(RenderRegistration);