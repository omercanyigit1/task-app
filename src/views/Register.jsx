import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import { Card } from "./../components/Card/Card.jsx";
import { FormInputs } from "./../components/FormInputs/FormInputs.jsx";
import Button from "./../components/CustomButton/CustomButton.jsx";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {postRegisterUser, isLoggedIn} from './../actions';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postRegisterUser(this.state.name, this.state.email, this.state.password);
    }

    componentDidMount() {
        this.props.isLoggedIn();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.token) {
            window.location.href = '/admin/dashboard';
        }
    }

    render() {
        const {name, email, password} = this.state;

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={6} mdOffset={3}>
                            <Card
                                title="Register User"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols={["col-md-12"]}
                                            properties={[
                                                {
                                                    label: "Name & Surname",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Name & Surname",
                                                    value: `${this.state.name}`,
                                                    onChange: (this.handleNameChange)
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-12"]}
                                            properties={[
                                                {
                                                    label: "Email address",
                                                    type: "email",
                                                    bsClass: "form-control",
                                                    placeholder: "Email",
                                                    value: `${this.state.email}`,
                                                    onChange: (this.handleEmailChange)
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-12"]}
                                            properties={[
                                                {
                                                    label: "Password",
                                                    type: "password",
                                                    bsClass: "form-control",
                                                    placeholder: "Password",
                                                    value: `${this.state.password}`,
                                                    onChange: (this.handlePasswordChange)
                                                }
                                            ]}
                                        />
                                        <Row>
                                            <Col md={6}>
                                                <p>
                                                    <span>You Can </span>
                                                    <NavLink to="/auth/login" className="nav-link">
                                                        Login
                                                    </NavLink>
                                                    <span> Here!!!</span>
                                                </p>
                                            </Col>
                                            <Col md={6}>
                                                <Button bsStyle="info"
                                                        pullRight
                                                        fill
                                                        disabled={(!name || !email || !password) ? true : false}
                                                        onClick={this.handleSubmit}>
                                                    Register
                                                </Button>
                                            </Col>
                                        </Row>
                                        <div className="clearfix" />
                                    </form>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        token: state.auth.token,
        loading: state.auth.loading,
        error: state.auth.error
    }
};

export default connect(mapStateToProps, {postRegisterUser, isLoggedIn})(Register);
