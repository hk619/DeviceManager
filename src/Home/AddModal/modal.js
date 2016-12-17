import React, { Component } from "react";
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as modelAction from './modal_action_creator';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

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

        this.state = {
            name: '',
            type: "",
            comment: '',
            computerNo: '',
            modalIsOpen: false
        }
        this.options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
        ];
    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.refs.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
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
        this.add_device(this.modalData);
    }
    
    logChange(event) {
        this.setState({
            type: event.value
        })
    }

    render() {
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
                    <form className="form-group">
                        <div>
                            <Select
                                name="Device Type"
                                value={this.state.type}
                                options={this.options}
                                onChange={this.logChange}
                                />
                        </div>
                        <div>
                            <label>Name</label>
                            <div>
                                <input label="Name" type='text' value={this.state.name} onChange={this.updateName} />
                            </div>
                        </div>
                        <div>
                            <label>Computer No</label>
                            <div>
                                <input label="Name" type='text' value={this.state.computerNo} onChange={this.updateComputerNo} />
                            </div>
                        </div>
                        <div>
                            <label>Name</label>
                            <div>
                                <input label="Name" type='text' />
                            </div>
                        </div>
                        <div>
                            <label>Comments</label>
                            <div>
                                <textarea label="Name" value={this.state.comment} onChange={this.updateComment} />
                            </div>
                        </div>

                    </form>
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
export default connect(mapStateToProps, modelAction)(AddModal);