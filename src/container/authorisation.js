import React, { Component, Fragment } from "react";
import { Redirect } from "react-router"
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect} from 'react-redux';

import Auth from "../components/authorisationPage";
import { userAuth } from '../action/userAuth'

import Modal from "../components/Modal";

class RenderAuthorisation extends Component { 
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
          return <Redirect to='/' />
        }
    }
    showModal = () =>{
        this.setState({modal : true}) 
    }
    closeEditModal = () => {
        const { responce } = this.props
        this.setState({modal : false})
        if (responce.login){
          this.setRedirect()
        }  
    }
    render() {
     const { userAuth, responce } = this.props
     
      return (
        <Fragment>
          {this.renderRedirect()}
          <Link to="/admin">to /admin</Link>
          <Auth showModal = { this.showModal } userAuth = { userAuth } />
          <Modal visible={this.state.modal}
                    onOk={this.closeEditModal}
                    onCancel={this.closeEditModal}
                    msg = "you have successfully logged in"
                    data = { responce }
          />
        </Fragment>          
      );
    }
}


const mapStateToProps = state => ({
  responce: state.auth.responce
});

const mapDispatchToProps = dispatch => bindActionCreators({ userAuth }, dispatch);

export default RenderAuthorisation = connect(
    mapStateToProps,
    mapDispatchToProps
)(RenderAuthorisation);