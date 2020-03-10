import React from 'react';
import Header from './header';
import Footer from './footer';
import { ToastContainer } from 'react-toastify';
import SideBar from './sidebar';
import Actions from './action';
import Nav from './nav';


class DefaultLayout extends React.Component {

    render() {
        return (
            <div className="wrapper boxed-wrapper">
                <ToastContainer />
                <Header logout={Actions.logout.bind(this)} />
                <SideBar />
                <main>
                    <div className="content-wrapper">
                        <Nav />
                        <div className="content">
                            {this.props.children}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default DefaultLayout