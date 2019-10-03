import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { regValidate } from '../utils/registrationValidate'
import { regRenderField } from '../common/regRenderFields'

import Authbuttons from '../components/buttons'

const RegistrForm = props => {

    const { handleSubmit, pristine, reset, userRegistration, showModal } = props
    const submit = (values) => {
        values.avatar = "https://site.com"
        values.isAdmin = 0
        values.description = "bad_boy"
        values.name = "ggg"
        values.phone = "+380951611680"
        showModal(true)
        userRegistration(values)
    }

    return (
        <div className="formdiv" >
            <div>
            <Authbuttons />
            <form onSubmit={handleSubmit(submit)} className="formRegistr">
                <div>
                    <div className="divName">
                        <div style={{ "width": "100%" }} >
                            <Field
                                name="login"
                                component={regRenderField}
                                type="text"
                                placeholder="login"
                                className="inputName"
                            />
                        </div>
                    </div>
                    <div className="divName">
                        <div style={{ "width": "100%" }} >
                            <Field
                                name="email"
                                component={regRenderField}
                                type="email"
                                placeholder="email@example.com"
                                className="inputName"
                            />
                        </div>
                    </div>
                            <Field
                                name="password"
                                component={regRenderField}
                                type="password"
                                placeholder="password"
                                className="input"
                            />
                </div>
                <div className="center">
                    <button type="submit"
                        className="buttonInRegistration"
                        disabled={pristine}
                    >
                        Sign up
                    </button>
                    <button type="button"
                        className="buttonInRegistration"
                        disabled={pristine}
                        onClick={reset}
                    >
                        Clear fields
                    </button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default reduxForm({ form: 'registrForm', validate: regValidate })(RegistrForm)


