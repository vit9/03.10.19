import React from "react";

export const authRenderField = ({input, meta: {touched, error}, label, type, placeholder }) => (  
    <div className={touched && error ? "form__input-box":"error"}>
        <label className="form__input-label" htmlFor="origin">
            {label}
            {touched && error ? <input  className="input" style={{"border":"1px solid #004740"}} type = {type} placeholder = {error}  {...input} /> : <input  className="input" type = {type} placeholder = {placeholder} {...input} /> }
        </label> 
        {touched && error && <p className="span_reg">{error}</p>}
    </div>
);