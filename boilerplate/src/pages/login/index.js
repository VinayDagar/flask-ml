import React, { Component } from 'react';
import FormLayout from 'layout/form-layout';
import LinkInline from 'components/link-inline';
import FormFieldInput from 'components/form-field-input';
import Actions from './actions';

const Footer = () => (
   <div>
        <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a className="btn btn-block btn-social btn-facebook btn-flat" href={process.env.REACT_APP_FB_SOCIAL_LOGIN}>
                <i className="fa fa-facebook"></i> Sign in using Facebook
            </a> 
            <a className="btn btn-block btn-social btn-google btn-flat" href={process.env.REACT_APP_GOOGLE_SOCIAL_LOGIN}>
                <i className="fa fa-google-plus"></i> Sign in using Google+
            </a> 
        </div>
        <div className="m-t-2">
            Don't have an account?  
            <LinkInline 
                inputClass="text-center ml-1"
                route="register"
                label='Sign Up'
            />
        </div>
   </div>
);

class Login extends Component {
    state = {
        email:'',
        password: '',
        rememberEmail: false,
    };
    render () {
        return (
            <FormLayout
                label="Sign in"
            >
                <form onSubmit={Actions.login.bind(this)} method="post">
                    <div className="form-group has-feedback">
                        <FormFieldInput 
                            value={this.state.email}
                            handleChange={Actions.onEmailChange.bind(this)}
                            attribute="email" 
                            inputType="email" 
                            placeholder="Email" 
                            required={true}
                        />
                    </div>
                    <div className="form-group has-feedback">
                        <FormFieldInput 
                            value={this.state.password}
                            handleChange={Actions.onPasswordChange.bind(this)}
                            attribute="password" 
                            inputType="password" 
                            placeholder="password" 
                            required={true}
                        />
                    </div>
                    <div className="col-xs-8">
                        <div className="checkbox icheck">
                            <LinkInline 
                                inputClass="pull-right"
                                route="forgot-password"
                            >
                                <i className="fa fa-lock"></i> Forgot Password ?
                            </LinkInline>
                        </div>
                    </div>
                    <div className="col-xs-4 m-t-1">
                        <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                    </div>
                </form>
                <Footer/>
            </FormLayout>
        );
    }
}

export default Login