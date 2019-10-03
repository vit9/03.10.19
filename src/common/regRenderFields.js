import React from "react";

export const regRenderField = ({input, meta: {touched, error}, label, type, placeholder }) => (
    <div className="form__input-box">
        <label className="form__input-label" htmlFor="origin">
            {label}
            {touched && error ? <input  className="input" style={{"border":"1px solid #004740"}} type = {type} placeholder = {error}  {...input} /> : <input  className="input" type = {type} placeholder = {placeholder} {...input} /> }
        </label>
        {touched && error && <span className="span_reg">{error}</span>}
    </div>
);