import React from 'react';
import { connect } from 'react-redux';
import Table from '../DetailsTable/table';
import * as allDevicesAction from './all_device_action_creator';

class All extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.all_devices_list();
    }
    render() {
        return (
            <div>
                <span>
                    <h1 className="pull-left" style={{ paddingLeft: 23 }}>All Devices</h1>
                </span>
                <Table />
            </div>
        );
    }
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, allDevicesAction)(All);