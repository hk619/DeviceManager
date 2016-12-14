import React from 'react';
import Table from '../DetailsTable/table';
import { connect } from 'react-redux';

class Computer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <span>
                    <h1 className="pull-left" style={{ paddingLeft: 23 }}>Computer</h1>
                </span>
                <Table />
            </div>
        );
    }
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(Computer);