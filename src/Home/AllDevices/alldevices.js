import React from 'react';
import Table from '../DetailsTable/table';
import { connect } from 'react-redux';

class All extends React.Component {
    constructor() {
        super();
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
export default connect(mapStateToProps)(All);