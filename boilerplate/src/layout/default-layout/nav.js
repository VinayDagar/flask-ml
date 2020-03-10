import React, { Component } from 'react';
import LinkInline from 'components/link-inline';

class Nav extends Component {

    state = {
        activeMenu: '/',
    };

    componentWillMount() {
        let url = window.location.pathname;
        url = url.split('/')[1];
        this.setState({
            'activeMenu': url 
        });
    }

    render () {
        return (
            <div className="content-header sty-one">
                <h1>Dashboard</h1>
                <ol className="breadcrumb">
                    <li><LinkInline route="/" label="Dashboard"/></li>
                    <li><i className="fa fa-angle-right mr-2"></i>{this.state.activeMenu}</li>
                </ol>
            </div>
        );
    }
};

export default Nav;