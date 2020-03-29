import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import { Card } from "./../components/Card/Card.jsx";
import { FormInputs } from "./../components/FormInputs/FormInputs.jsx";
import Button from "./../components/CustomButton/CustomButton.jsx";
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import {postLoginUser, isLoggedIn} from './../actions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postLoginUser(this.state.email, this.state.password);
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
        const {email, password} = this.state;

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={6} mdOffset={3} lg={6} lgOffset={3}>
                            <Card
                                title="Login User"
                                content={
                                    <form>
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
                                                },
                                            ]}
                                        />
                                        <Row>
                                            <Col md={6}>
                                                <p>
                                                    <span>You Can </span>

                                                     <NavLink to="/auth/register" className="nav-link">
                                                        Register
                                                    </NavLink>
                                                    <span> Here!!!</span>
                                                </p>
                                            </Col>
                                            <Col md={6}>
                                                <Button bsStyle="info"
                                                        pullRight
                                                        fill
                                                        disabled={(!email || !password) ? true : false}
                                                        onClick={this.handleSubmit}
                                                >
                                                    Login
                                                </Button>
                                            </Col>
                                            <div className="clearfix" />
                                        </Row>
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

export default connect(mapStateToProps, {postLoginUser, isLoggedIn})(Login);
