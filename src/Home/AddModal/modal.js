import React, { Component } from "react";
import Modal from 'react-modal';
import { connect } from 'react-redux';

class AddModal extends Component {
    constructor(props) {
        super(props);
        this.getInitialState = this.getInitialState.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateComputerNo = this.updateComputerNo.bind(this);
        this.state = {
            modalIsOpen: false,
            name: '',
            computerNo: '',
            comment: ''
        }
    }
    getInitialState() {
        return { modalIsOpen: false };
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.refs.subtitle.style.color = '#f00';
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

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.openModal}>Add</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    >
                    <h3>Add Device</h3>
                    <form className="form-group">
                        <div>
                            <label>Type</label>
                            <div>
                                <select className="form-control">
                                    <option value="" selected="selected">Select</option>
                                    <option value="laptop">laptop</option>
                                    <option value="computer">computer</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label>Name</label>
                            <div>
                                <input type='text' value={this.state.name} onChange={this.updateName} />
                            </div>
                        </div>
                        <div>
                            <label>Computer No</label>
                            <div>
                                <input type='text' value={this.state.computerNo} onChange={this.updateComputerNo} />
                            </div>
                        </div>
                        <div>
                            <label>Name</label>
                            <div>
                                <input type='text' />
                            </div>
                        </div>
                        <div>
                            <label>Comments</label>
                            <div>
                                <textarea value={this.state.comment} onChange={this.updateComment} />
                            </div>
                        </div>

                    </form>
                    <button className="btn btn-success" onClick={this.closeModal}>Save</button>
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
        width: '600',
        zIndex: '12'
    }
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(AddModal);