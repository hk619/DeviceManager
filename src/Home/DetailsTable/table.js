import { connect } from 'react-redux';
import React, { Component } from 'react';
import AddModal from '../AddModal/modal';
import * as tableAction from './table_action_creator';

class Table extends Component {
    constructor(props) {
        super(props);
        this.deleteData = this.deleteData.bind(this);
    }
    deleteData(data) {
        this.props.delete_item(data, this.props.detailsList);
    }
    render() {
        if (this.props.detailsList.length) {
            return (
                <div style={{ paddingTop: 100 }}>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Serial No</th>
                                <th>Model</th>
                                <th>Employee No</th>
                                <th>Asset ID</th>
                                <th>Purchase Date</th>
                                <th>Remark</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.detailsList.map(({name}, index) => {
                                    let deleteRowClick = this.deleteData.bind(this, index);
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {name}
                                            </td>
                                            <td>
                                                {name}
                                            </td>
                                            <td>
                                                {name}
                                            </td>
                                            <td>
                                                {name}
                                            </td>
                                            <td>
                                                {name}
                                            </td>
                                            <td>
                                                {name}
                                            </td>
                                            <td><AddModal label='Edit' class="btn btn-info btn-sm" title="Edit Device" edit='true' editIndex={index} />
                                                <button className=' paddign btn btn-danger btn-sm' onClick={deleteRowClick}>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div >
            );
        } else {
            return (
                <div style={{ paddingTop: 100 }}>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Serial No</th>
                                <th>Model</th>
                                <th>Employee No</th>
                                <th>Asset ID</th>
                                <th>Purchase Date</th>
                                <th>Remark</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan='7'>
                                    <NoList />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            )
        }
    }
}

const NoList = () => (
    <div>
        No results found
    </div>
);

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, tableAction)(Table);
