import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDBIcon, MDBInput, MDBBtn } from 'mdbreact';

const TextField= (props)=> (
    <span>
        <h4>{props.label || props.attribute }</h4>
        <input 
            type={props.inputType}
            className={props.inputClass}
            name={props.attribute}
            value={props.inputValue}
            onChange={props.handleChange}
            disabled={props.disabled}
            required={props.required}
        />
    </span>
);

let passwordType = 'password'
function togglePassword() {
    console.log(passwordType, 'passwordType')
    if(passwordType === 'password') {
        passwordType = 'text'
    } else passwordType = 'password'
}
const PasswordField = (props) => (
    <div>
        <h4>{props.label}</h4>
        <input
            type={passwordType}
            className={props.inputClass}
            name={props.attribute}
            value={props.inputValue}
            onChange={props.handleChange}
            disabled={props.disabled}
            required={props.required}
        />
        {/* <span> <MDBBtn onClick={togglePassword()} floating ><MDBIcon icon="eye" /> </MDBBtn ></span> */}
    </div>
)

const CheckBox= (props)=> (
    <span>
        <input 
            type="checkbox"
            className={props.inputClass}
            name={props.attribute}
            value={props.inputValue}
            defaultChecked={props.inputValue}
            onChange={props.handleChange}
            disabled={props.disabled}
            required={props.required}
            error={props.error}
            hint={props.placeholder}
            icon={props.icon}
            label={props.label}
            gap={props.gap}
            group={props.group}
            onInput={props.onInput}
            background={props.showBackground}
        />
    </span>
);

class FormFieldInput extends Component {
   render() {
        if(['text','email','number'].includes(this.props.inputType)) {
            return  <TextField {...this.props} />;
        } else if(this.props.inputType === 'password') {
            return <PasswordField {...this.props} />;
        } else if(this.props.inputType === 'checkbox'){
            return <CheckBox {...this.props} />;
        }
        return  <TextField {...this.props} />;
    }
}

FormFieldInput.defaultProps = {
    inputType: 'text',
    inputClass : 'form-control',
    required: false,
    disabled: false,
    showLabel: true,
    showErrors: false,
    items: [],
    background: false
};

FormFieldInput.propTypes = {
    inputType: PropTypes.string,
    handleChange: PropTypes.func,
    inputClass: PropTypes.string,
    attribute: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    showLabel: PropTypes.bool,
    showErrors: PropTypes.bool,
    falseCheckboxText: PropTypes.string,
    trueCheckboxText: PropTypes.string,
    items: PropTypes.array,
};

export default FormFieldInput;