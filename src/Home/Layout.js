import React, { Component } from 'react';
import { Link } from 'react-router';
import AddModal from './AddModal/modal';
import { connect } from 'react-redux';
import * as actionCreator from './home_action_creator';

class Layout extends Component {
    constructor(props) {
        super(props)
        this.laptopClick = this.laptopClick.bind(this);
        this.computerClick = this.computerClick.bind(this);
        this.otherClick = this.otherClick.bind(this);
        this.allClick = this.allClick.bind(this);
        this.selected = 'laptop';
        this.active = 'active'
        switch (this.props.location.pathname) {
            case "/computer": {
                this.selected = 'computer';
                this.props.change_tab(this.selected);
                break;
            }
            case "/others": {
                this.selected = 'other';
                this.props.change_tab(this.selected);
                break;
            }
            case "/all": {
                this.selected = 'all';
                this.props.change_tab(this.selected);
                break;
            }
            default: {
                this.selected = 'laptop';
                this.props.change_tab(this.selected);
                break;
            }
        }
    }

    laptopClick() {
        this.selected = 'laptop';
        this.props.change_tab(this.selected);
    }
    computerClick() {
        this.selected = 'computer';
        this.props.change_tab(this.selected);
    }
    otherClick() {
        this.selected = 'other';
        this.props.change_tab(this.selected);
    }
    allClick() {
        this.selected = 'all';
        this.props.change_tab(this.selected);
    }

    render() {
        return (
            <div>
                <div id="throbber" className="layout"></div>
                <div id="noty-holder"></div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="">
                            <span className="navbar-brand" style={{ paddingTop: 20, color: '#FAFAFA', cursor: 'pointer' }} >
                                ASSET MANAGEMENT CONSOLE
                        </span>l
                        </div>
                        <ul className="nav navbar-right top-nav">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Admin User <b className="fa fa-angle-down"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#"><i className="fa fa-fw fa-power-off"></i> Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <nav style={{ marginTop: 0, backgroundColor: '#E0E0E0' }}>
                        <div className="container-fluid">
                            <ul className="nav navbar-nav">
                                <li className={this.props.selectedTab == 'laptop' ? this.active : ''}><Link to='laptop' onClick={this.laptopClick}>LAPTOP</Link></li>
                                <li className={this.props.selectedTab == 'computer' ? this.active : ''}><Link to='computer' onClick={this.computerClick} >COMPUTER </Link></li>
                                <li className={this.props.selectedTab == 'other' ? this.active : ''}><Link to='others' onClick={this.otherClick}>OTHER DEVICES</Link></li>
                                <li className={this.props.selectedTab == 'all' ? this.active : ''}><Link to='all' onClick={this.allClick}>ALL DEVICES</Link></li>

                                <li style={{ marginLeft: 600, marginTop: 8 }}>
                                    <div className="input-group stylish-input-group" style={{ width: 250 }}>
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <span className="input-group-addon">
                                            <button type="submit">
                                                <span className="glyphicon glyphicon-search"></span>
                                            </button>
                                        </span>
                                    </div>
                                </li>
                                <li style={{ marginLeft: 20, marginTop: 8 }}>
                                    <AddModal label='Add' class="btn btn-primary" title="Add Device"/>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </nav>

                <div id="page-wrapper">
                    <div className="container-fluid">
                        <div className="row" id="main" >
                            <div className="col-sm-12" id="content" style={{ paddingTop: 100 }}>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStatetoProps = (state) => state;

export default connect(mapStatetoProps, actionCreator)(Layout);