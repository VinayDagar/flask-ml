import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LinkInline extends Component {
  render() {
    const routeObject = {
        pathname: this.props.route,
        // search: "?sort=name",
        // hash: "#the-hash",
        // state: { fromDashboard: true }
    };

    return (
        <Link to={routeObject}  className={this.props.inputClass}> 
            { this.props.children || this.props.label}
        </Link>
    );
  }
}

LinkInline.propTypes = {
  route: PropTypes.string,
  label: PropTypes.string,
};

export default LinkInline;