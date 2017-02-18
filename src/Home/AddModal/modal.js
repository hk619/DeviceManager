import moment from 'moment';
import Modal from 'react-modal';
import Select from 'react-select';
import { connect } from 'react-redux';
import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';
import * as modalAction from './modal_action_creator';

class AddModal extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.logChange = this.logChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.updateName = this.updateName.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.updateComputerNo = this.updateComputerNo.bind(this);
        // this.state = {
        //     name: '',
        //     type: "",
        //     comment: '',
        //     computerNo: '',
        //     modalIsOpen: false,
        //     startDate: moment()
        // }
        this.options = [
            { value: 'laptop', label: 'Laptop' },
            { value: 'computer', label: 'Computer' },
            { value: 'otherdevices', label: 'Other Devices' }

        ];
        if (this.props.label === 'Edit') {
            this.state = {
                name: this.props.detailsList[this.props.editIndex].name,
                type: this.props.detailsList[this.props.editIndex].type,
                comment: this.props.detailsList[this.props.editIndex].comment,
                computerNo: this.props.detailsList[this.props.editIndex].computerNo,
                modalIsOpen: false,
                startDate: this.props.detailsList[this.props.editIndex].startDate,
            }
        }
        else {
            this.state = {
                name: '',
                type: "",
                comment: '',
                computerNo: '',
                modalIsOpen: false,
                startDate: moment()
            }
        }
    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.refs.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }
    updateName(event) {
        this.setState({
            name: event.target.value
        })
    }
    updateComputerNo(event) {
        this.setState({
            computerNo: event.target.value
        })
    }

    updateComment(event) {
        this.setState({
            comment: event.target.value
        })
    }

    submit() {
        this.modalData = {
            device: this.props.selectedTab,
            name: this.state.name,
            computerNo: this.state.computerNo,
            comment: this.state.comment
        }
        this.props.add_device(this.modalData);
        this.closeModal()
    }

    logChange(event) {
        this.setState({
            type: event.value
        })
    }

    render() {
        debugger
        return (
            <div >
                <button className={this.props.class} onClick={this.openModal}>{this.props.label}</button>
                <Modal
                    contentLabel="modal"
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                    <h3>{this.props.title}</h3>
                    {/*<form className="form-group">
                        <div>
                            <Select
                                name="Device Type"
                                value={this.state.type}
                                options={this.options}
                                onChange={this.logChange}
                                />
                        </div>
                        <div>
                            <label>Model</label>
                            <div>
                                <input label="Name" type='text' value={this.state.name} onChange={this.updateName} />
                            </div>
                        </div>
                        <div>
                            <label>Serial No</label>
                            <div>
                                <input label="Name" type='text' value={this.state.computerNo} onChange={this.updateComputerNo} />
                            </div>
                        </div>
                        <div>
                            <label>Emp Name</label>
                            <div>
                                <input label="Name" type='text' />
                            </div>
                        </div>
                        <div>
                            <label>Asset ID</label>
                            <div>
                                <input label="Name" type='text' />
                            </div>
                        </div>
                        <div>
                            <label>Purchase Date</label>
                            <div>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <div>
                            <label>Comments</label>
                            <div>
                                <textarea label="Name" value={this.state.comment} onChange={this.updateComment} />
                            </div>
                        </div>

                    </form>*/}
                    <div className="container">
                        <form>
                            <div className="form-group row">
                                <label for="lgFormGroupInput" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-lg" id="lgFormGroupInput" placeholder="you@example.com" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control form-control-sm" id="smFormGroupInput" placeholder="you@example.com" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <button className="btn btn-success" onClick={this.submit}>Save</button>
                    <button className="btn btn-danger" onClick={this.closeModal}>Close</button>
                </Modal>
            </div>
        );
    }

}
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        zIndex: '12'
    }
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, modalAction)(AddModal);