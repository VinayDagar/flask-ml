import React, {Component} from 'react'
import LinkInline from 'components/link-inline'
import logoMini from 'assets/img/logo-n-blue.png';
import logoLg from 'assets/img/logo-blue.png';
import userImage from 'assets/img/img1.jpg';

class Header extends Component {
    state = {
        isNotificationBoxOpen: false,
        isProfileBoxOpen: false,
    };
    constructor(props) {
        super(props)
    }

    toggleNotification() {
        this.setState({
            'isNotificationBoxOpen': !this.state.isNotificationBoxOpen,
            'isProfileBoxOpen': false
        });
    }

    toggleProfile() {
        this.setState({
            'isProfileBoxOpen': !this.state.isProfileBoxOpen,
            'isNotificationBoxOpen': false
        });
    }

    render() {
        return (
            <header className="main-header">
                <LinkInline route="/" inputClass="logo blue-bg">
                    <span className="logo-mini"><img src={logoMini} alt="" /></span>
                    <span className="logo-lg"><img src={logoLg} alt="" /></span>
                </LinkInline>
                <nav className="navbar blue-bg navbar-static-top">
                    <ul className="nav navbar-nav pull-left">
                        <li><a className="sidebar-toggle" data-toggle="push-menu" ></a> </li>
                    </ul>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown messages-menu" onClick={this.toggleNotification.bind(this)}> <a className="dropdown-toggle cursor-pointer" data-toggle="dropdown"> <i className="fa fa-bell-o"></i>
                                <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                            </a>
                                <ul className={`dropdown-menu ${this.state.isNotificationBoxOpen ? 'show' : ''}`}>
                                    <li className="header">Notifications</li>
                                    <li>
                                        <ul className="menu">
                                            <li><a >
                                                <div className="pull-left icon-circle red"><i className="icon-lightbulb"></i></div>
                                                <h4>Alex C. Patton</h4>
                                                <p>I've finished it! See you so...</p>
                                                <p><span className="time">9:30 AM</span></p>
                                            </a></li>
                                            <li><a >
                                                <div className="pull-left icon-circle blue"><i className="fa fa-coffee"></i></div>
                                                <h4>Nikolaj S. Henriksen</h4>
                                                <p>I've finished it! See you so...</p>
                                                <p><span className="time">1:30 AM</span></p>
                                            </a></li>
                                            <li><a >
                                                <div className="pull-left icon-circle green"><i className="fa fa-paperclip"></i></div>
                                                <h4>Kasper S. Jessen</h4>
                                                <p>I've finished it! See you so...</p>
                                                <p><span className="time">9:30 AM</span></p>
                                            </a></li>
                                            <li><a >
                                                <div className="pull-left icon-circle yellow"><i className="fa  fa-plane"></i></div>
                                                <h4>Florence S. Kasper</h4>
                                                <p>I've finished it! See you so...</p>
                                                <p><span className="time">11:10 AM</span></p>
                                            </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="footer"><LinkInline route="/notification" label="Check all Notifications" /></li>
                                </ul>
                            </li>
                            <li className="dropdown user user-menu p-ph-res" onClick={this.toggleProfile.bind(this)} > <a className="dropdown- cursor-pointer" data-toggle="dropdown"> <img src={userImage} className="user-image" alt="User Image" /> <span className="hidden-xs">User</span> </a>
                                <ul className={`dropdown-menu ${this.state.isProfileBoxOpen ? 'display-block' : ''}`}>
                                    <li className="user-header">
                                        <div className="pull-left user-img"><img src={userImage} className="img-responsive img-circle" alt="User" /></div>
                                        <p className="text-left">User<small>florence@gmail.com</small> </p>
                                    </li>
                                    <li><LinkInline route="/profile"><i className="icon-profile-male">&nbsp;&nbsp;&nbsp;My Profile</i></LinkInline></li>
                                    <li><LinkInline route="/notification"><i className="fa fa-bell-o"></i>Notfication</LinkInline></li>
                                    <li><LinkInline route="/login"><i className="fa fa-power-off">&nbsp;&nbsp;&nbsp;Logout</i></LinkInline></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </nav>
            </header>
        );
    }
};

export default Header