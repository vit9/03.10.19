import React from "react";
import { reduxForm, Field } from "redux-form";

import { authValidate } from "../utils/authValidate";
import { authRenderField } from "../common/authRenderFields"

import Authbuttons from './buttons'

const Form = props => {
    const { handleSubmit, userAuth, showModal } = props
    const submit = (values) => {
        showModal(true)
        userAuth(values);
    }
    return (
        <div className="formdiv">
            <div>
                <Authbuttons />
                <form className="formAuth" >
                    <Field
                        name="email"
                        component={authRenderField}
                        type="Емейл"
                        placeholder="email@example.com"
                        className="input"       
                    />
                    <Field
                        name="password"
                        component={authRenderField}
                        type="password"
                        placeholder="password"
                        className="input"
                    />
                    <div className="center">
                        <button className="buttonInAuth" onClick={handleSubmit(submit)}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>



    );
}

export default reduxForm({ form: "authForm", validate: authValidate })(Form);