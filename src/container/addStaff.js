import React, { Component, Fragment } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Redirect } from "react-router"


import { createStaff } from "../action/createStaff";

import CreateNewStaff from '../components/createNewStaff'

import Modal from '../components/Modal'

class AddNewStaff extends Component {
    constructor(props){
        super(props)
        this.state = {modal:false, refirect:false}
    }
    showModal = () =>{
        this.setState({modal : true}) 
    }
    closeEditModal = () => {
        this.setState({modal : false})   
        this.setRedirect()

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
    render() {
         const { createStaff } = this.props;
        return (

            <Fragment>
                 {this.renderRedirect()}           
                <CreateNewStaff createStaff = { createStaff } showModal = { this.showModal }/>
                <Modal visible={this.state.modal}
                    onOk={this.closeEditModal}
                    onCancel={this.closeEditModal}
                    msg = "item create"
                    data = { true }
                />
            </Fragment>

        );
    }
}


const mapStateToProps = state => ({
    
    
   
});

const mapDispatchToProps = dispatch => bindActionCreators({ createStaff, }, dispatch);

export default AddNewStaff = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewStaff);