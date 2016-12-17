import React from 'react';
import Table from '../DetailsTable/table';
import { connect } from 'react-redux'
import * as laptopAction from './laptop_action_creator';

class Laptop extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.laptop_list();
    }
    render() {
        return (
            <div>
                <span>
                    <h1 className="pull-left" style={{ paddingLeft: 23 }}>
                        laptop
                </h1>
                </span>
                <Table />
            </div>
        );
    }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, laptopAction)(Laptop);
