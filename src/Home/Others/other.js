import React, { Component } from 'react';
import Table from '../DetailsTable/table';
import { connect } from 'react-redux';
import * as otherAction from './other_action_creator';

class OtherDevices extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.other_list();
    }
    render() {
        return (
            <div >
                <span>
                    <h1 className="pull-left" style={{ paddingLeft: 23 }}>
                        Other Devices
                </h1>
                </span>
                <Table />
            </div>
        );
    }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, otherAction)(OtherDevices);