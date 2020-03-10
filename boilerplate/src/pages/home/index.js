import React, { Component } from 'react';
import DefaultLayout from 'layout/default-layout/index';

export default class Home extends Component {
    render() {
        return (
            <DefaultLayout>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 m-b-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="m-b-1"> <i className="icon-facebook f-30 text-blue"></i> <span className="pull-right text-muted">Likes</span> </div>
                        <div className="info-widget-text row">
                            <div className="col-sm-6 pull-left"><span>Facebook</span></div>
                            <div className="col-sm-6 pull-right text-right text-blue f-25">3,500</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 m-b-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="m-b-1"> <i className="icon-twitter f-30 text-blue"></i> <span className="pull-right text-muted">Tweets</span> </div>
                        <div className="info-widget-text row">
                            <div className="col-sm-6 pull-left"><span>Twwitter</span></div>
                            <div className="col-sm-6 pull-right text-right text-blue f-25">2,950</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 m-b-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="m-b-1"> <i className="icon-googleplus f-30 text-blue"></i> <span className="pull-right text-muted">Share</span> </div>
                        <div className="info-widget-text row">
                            <div className="col-sm-6 pull-left"><span>Google+</span></div>
                            <div className="col-sm-6 pull-right text-right text-blue f-25">1,750</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 m-b-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="m-b-1"> <i className="icon-rss f-30 text-blue"></i> <span className="pull-right text-muted">Posts</span> </div>
                        <div className="info-widget-text row">
                            <div className="col-sm-6 pull-left"><span>Blog</span></div>
                            <div className="col-sm-6 pull-right text-right text-blue f-25">2,250</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-3">
                    <div className="tile-progress tile-pink">
                        <div className="tile-header">
                        <h5>New Orders</h5>
                        <h3>1250</h3>
                        </div>
                        <div className="tile-progressbar"> <span data-fill="65.5%"></span> </div>
                        <div className="tile-footer">
                        <h4> <span className="pct-counter">65.5</span>% increase </h4>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="tile-progress tile-red">
                        <div className="tile-header">
                        <h5>Monthly Sales</h5>
                        <h3>850</h3>
                        </div>
                        <div className="tile-progressbar"> <span data-fill="70%" ></span> </div>
                        <div className="tile-footer">
                        <h4> <span className="pct-counter">70</span>% increase </h4>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="tile-progress tile-cyan">
                        <div className="tile-header">
                        <h5>New Users</h5>
                        <h3>2250</h3>
                        </div>
                        <div className="tile-progressbar"> <span data-fill="50%" ></span> </div>
                        <div className="tile-footer">
                        <h4> <span className="pct-counter">50</span>% increase </h4>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="tile-progress tile-aqua">
                        <div className="tile-header">
                        <h5>Feedbacks</h5>
                        <h3>530</h3>
                        </div>
                        <div className="tile-progressbar"> <span data-fill="75.5%" ></span> </div>
                        <div className="tile-footer">
                        <h4> <span className="pct-counter">75.5</span>% increase </h4>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-xs-12 m-b-3">
                    <div className="card">
                        <div className="card-body box-rounded box-gradient"> <span className="info-box-icon bg-transparent"><i className="ti-stats-up text-white"></i></span>
                        <div className="info-box-content">
                            <h6 className="info-box-text text-white">New Orders</h6>
                            <h1 className="text-white">5,500</h1>
                            <span className="progress-description text-white"> 70% Increase in 30 Days </span> </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12 m-b-3">
                    <div className="card">
                        <div className="card-body box-rounded box-gradient-4"> <span className="info-box-icon bg-transparent"><i className="ti-face-smile text-white"></i></span>
                        <div className="info-box-content">
                            <h6 className="info-box-text text-white">New Users</h6>
                            <h1 className="text-white">2,040</h1>
                            <span className="progress-description text-white"> 45% Increase in 30 Days </span> </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12 m-b-3">
                    <div className="card">
                        <div className="card-body box-rounded box-gradient-2"> <span className="info-box-icon bg-transparent"><i className="ti-bar-chart text-white"></i></span>
                        <div className="info-box-content">
                            <h6 className="info-box-text text-white">Online Revenue</h6>
                            <h1 className="text-white">6,450</h1>
                            <span className="progress-description text-white"> 65% Increase in 30 Days </span> </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12 m-b-3">
                    <div className="card">
                        <div className="card-body box-rounded box-gradient-3"> <span className="info-box-icon bg-transparent"><i className="ti-money text-white"></i></span>
                        <div className="info-box-content">
                            <h6 className="info-box-text text-white">Total Profit</h6>
                            <h1 className="text-white">$ 8,590</h1>
                            <span className="progress-description text-white"> 45% Increase in 30 Days </span> </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-xs-6 m-b-3">
                    <div className="card">
                        <div className="card-body"><span className="info-box-icon bg-aqua"><i className="icon-briefcase"></i></span>
                        <div className="info-box-content"> <span className="info-box-number">1234</span> <span className="info-box-text">New Projects</span> </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-xs-6 m-b-3">
                    <div className="card">
                        <div className="card-body"><span className="info-box-icon bg-green"><i className="icon-pencil"></i></span>
                        <div className="info-box-content"> <span className="info-box-number">456</span> <span className="info-box-text">Pending Project</span></div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-xs-6 m-b-3">
                    <div className="card">
                        <div className="card-body"><span className="info-box-icon bg-yellow"><i className="icon-wallet"></i></span>
                        <div className="info-box-content"> <span className="info-box-number">$41234</span> <span className="info-box-text">Total Cost</span></div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-xs-6 m-b-3">
                    <div className="card">
                        <div className="card-body"><span className="info-box-icon bg-red"><i className="icon-layers"></i></span>
                        <div className="info-box-content"> <span className="info-box-number">$81234</span> <span className="info-box-text">Total Earnings</span></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                    <div className="small-box bg-orange">
                        <div className="inner">
                        <div className="text-left">
                            <h2>Total Sales</h2>
                            <h6>Todays Income</h6>
                        </div>
                        <div className="text-right m-t-2">
                            <h1><sup><i className="ti-arrow-up"></i></sup> $500</h1>
                        </div>
                        <div className="m-b-2"><span className="text-white">35%</span>
                            <div className="progress bg-lightblue">
                            <div className="progress-bar bg-white" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="small-box bg-darkblue text-white">
                        <div className="inner">
                        <div className="text-left">
                            <h2>Total Sales</h2>
                            <h6>This Month Income</h6>
                        </div>
                        <div className="text-right m-t-2">
                            <h1><sup><i className="ti-arrow-up"></i></sup> $2500</h1>
                        </div>
                        <div className="m-b-2"><span className="text-white">55%</span>
                            <div className="progress bg-lightblue">
                            <div className="progress-bar bg-white" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="small-box bg-aqua">
                        <div className="inner">
                        <div className="text-left">
                            <h2>Total Profit</h2>
                            <h6>This Year Income</h6>
                        </div>
                        <div className="text-right m-t-2">
                            <h1><sup><i className="ti-arrow-up"></i></sup> $8500</h1>
                        </div>
                        <div className="m-b-2"><span className="text-white">75%</span>
                            <div className="progress bg-lightblue">
                            <div className="progress-bar bg-white" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                    <div className="card m-b-3">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div> <i className="ti-face-smile f-20 text-blue"></i>
                            <div className="info-box-content">
                                <h1 className="f-25 text-black">1,150</h1>
                                <span className="progress-description">New Orders</span> </div>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" > <span className="sr-only">40% Complete</span> </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div> <i className="ti-bar-chart f-20 text-danger"></i>
                            <div className="info-box-content">
                                <h1 className="f-25 text-black">2,030</h1>
                                <span className="progress-description">New Orders</span> </div>
                            <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"> <span className="sr-only">50% Complete</span> </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div> <i className="ti-panel f-20 text-info"></i>
                            <div className="info-box-content">
                                <h1 className="f-25 text-black">4,250</h1>
                                <span className="progress-description">Online Revenue</span> </div>
                            <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" > <span className="sr-only">65% Complete</span> </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div> <i className="ti-wallet f-20 text-green"></i>
                            <div className="info-box-content">
                                <h1 className="f-25 text-black">8,350</h1>
                                <span className="progress-description">Total Profit</span> </div>
                            <div className="progress">
                                <div className="progress-bar bg-green" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"> <span className="sr-only">85% Complete</span> </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}


  {/* <div className="row">
                    <div className="col-lg-3">
                    <div className="tile-progress tile-pink">
                        <div className="tile-header">
                        <h5>New Orders</h5>
                        <h3>1250</h3>
                        </div>
                        <div className="tile-progressbar"> <span data-fill="65.5%"></span> </div>
                        <div className="tile-footer">
                        <h4> <span className="pct-counter">65.5</span>% increase </h4>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="tile-progress tile-red">
                        <div className="tile-header">
                        <h5>Monthly Sales</h5>
                        <h3>850</h3>
                        </div>
                        <div className="tile-progressbar"> <span data-fill="70%"></span> </div>
                        <div className="tile-footer">
                        <h4> <span className="pct-counter">70</span>% increase </h4>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="tile-progress tile-cyan">
                        <div className="tile-header">
                        <h5>New Users</h5>
                        <h3>2250</h3>
                        </div>
                        <div className="tile-progressbar"> <span data-fill="50%" ></span> </div>
                        <div className="tile-footer">
                        <h4> <span className="pct-counter">50</span>% increase </h4>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="tile-progress tile-aqua">
                        <div className="tile-header">
                        <h5>Feedbacks</h5>
                        <h3>530</h3>
                        </div>
                        <div className="tile-progressbar"> <span data-fill="75.5%" ></span> </div>
                        <div className="tile-footer">
                        <h4> <span className="pct-counter">75.5</span>% increase </h4>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 m-b-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="m-b-1"> <i className="icon-facebook f-30 text-blue"></i> <span className="pull-right text-muted">Likes</span> </div>
                        <div className="info-widget-text row">
                            <div className="col-sm-6 pull-left"><span>Facebook</span></div>
                            <div className="col-sm-6 pull-right text-right text-blue f-25">3,500</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 m-b-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="m-b-1"> <i className="icon-twitter f-30 text-blue"></i> <span className="pull-right text-muted">Tweets</span> </div>
                        <div className="info-widget-text row">
                            <div className="col-sm-6 pull-left"><span>Twwitter</span></div>
                            <div className="col-sm-6 pull-right text-right text-blue f-25">2,950</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 m-b-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="m-b-1"> <i className="icon-googleplus f-30 text-blue"></i> <span className="pull-right text-muted">Share</span> </div>
                        <div className="info-widget-text row">
                            <div className="col-sm-6 pull-left"><span>Google+</span></div>
                            <div className="col-sm-6 pull-right text-right text-blue f-25">1,750</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 m-b-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="m-b-1"> <i className="icon-rss f-30 text-blue"></i> <span className="pull-right text-muted">Posts</span> </div>
                        <div className="info-widget-text row">
                            <div className="col-sm-6 pull-left"><span>Blog</span></div>
                            <div className="col-sm-6 pull-right text-right text-blue f-25">2,250</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-12 m-b-3">
                </div>
                </div> */}