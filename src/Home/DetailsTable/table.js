import React, { Component } from 'react';
import AddModal from '../AddModal/modal';

class Table extends Component {
    constructor(props) {
        super(props);
        this.editDetails = this.editDetails.bind(this);
    }
    editDetails() {
        debugger
    }
    render() {
        return (
            <div style={{ paddingTop: 100 }}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Row</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Carter</td>
                            <td>johncarter@mail.com</td>
                            <td><AddModal label='Edit' class="btn btn-info btn-sm" title="Edit Device"/>
                                <button className=' paddign btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Peter</td>
                            <td>Parker</td>
                            <td>peterparker@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>John</td>
                            <td>Rambo</td>
                            <td>johnrambo@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Carter</td>
                            <td>johncarter@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Peter</td>
                            <td>Parker</td>
                            <td>peterparker@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>John</td>
                            <td>Rambo</td>
                            <td>johnrambo@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Carter</td>
                            <td>johncarter@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Peter</td>
                            <td>Parker</td>
                            <td>peterparker@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>John</td>
                            <td>Rambo</td>
                            <td>johnrambo@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Carter</td>
                            <td>johncarter@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Peter</td>
                            <td>Parker</td>
                            <td>peterparker@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>John</td>
                            <td>Rambo</td>
                            <td>johnrambo@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>Carter</td>
                            <td>johncarter@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Peter</td>
                            <td>Parker</td>
                            <td>peterparker@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>John</td>
                            <td>Rambo</td>
                            <td>johnrambo@mail.com</td>
                            <td><button className='btn btn-info btn-sm'>Edit</button><button className='btn btn-danger btn-sm'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div >
        );
    }
}

export default Table;