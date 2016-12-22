import React from 'react';
import { connect } from 'react-redux';
import Table from '../DetailsTable/table';
import * as computerAction from './computer_action_creator';

class Computer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.computer_list();
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
export default connect(mapStateToProps, computerAction)(Computer);