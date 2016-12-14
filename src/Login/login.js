import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.unameChange = this.unameChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.submit = this.submit.bind(this);
    }
    unameChange(event) {
        this.setState({
            username: event.target.value.trim()
        });
    }
    passChange(event) {
        this.setState({
            password: event.target.value
        });
    }
    submit() {
        this.props.submit();
    }
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="container loginForm" id="formContainer">
                        <form className="form-signin" id="login" role="form">
                            <h3 className="form-signin-heading">Please sign in</h3>
                            <input type="text" className="form-control" ref="uname" name="loginUnames" value={this.state.username} onChange={this.unameChange} id="loginEmail" placeholder="Username" required autofocus />
                            <input type="password" className="form-control" name="loginPass" value={this.state.password} onChange={this.passChange} id="loginPass" placeholder="Password" required />
                            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.submit}>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}
export default Login;
