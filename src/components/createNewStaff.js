import React from "react";
import { reduxForm, Field } from "redux-form";

import { authRenderField } from "../common/authRenderFields"


const Form = props => {
    const { handleSubmit, createStaff, showModal } = props
    const submit = (values) => {
        let obj = {
            description: "qwerty",
            staff: "https://bitrafmix.com/data/images/0318/1520020708163137_1000.jpg",
            title: values.email,
            price: values.password
        }
        
        createStaff(obj);
        showModal()
    }
    return (
        <div className="formdiv">
            <div>
                
                <form className="formAuth" >
                    <Field
                        name="email"
                        component={authRenderField}
                        type="Емейл"
                        placeholder="title"
                        className="input"       
                    />
                    <Field
                        name="password"
                        component={authRenderField}
                        type="number"
                        placeholder="price"
                        className="input"
                    />
                    <div className="center">
                        <button className="buttonInAuth" onClick={handleSubmit(submit)}>
                            create item
                        </button>
                    </div>
                </form>
            </div>
        </div>



    );
}

export default reduxForm({ form: "authForm" })(Form);