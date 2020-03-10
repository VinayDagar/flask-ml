import React from 'react';

export default (props) => {
    return (
        <div>
            <div className="login-box">
                <div className="login-box-body">
                    <h3 className="login-box-msg">{props.label}</h3>
                    <hr />
                    {props.children}
                </div>
            </div>
        </div>
    );
};
