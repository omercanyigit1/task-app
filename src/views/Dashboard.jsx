import React, {Component} from "react";
import {Grid, Row, Col, Modal} from "react-bootstrap";
import {connect} from 'react-redux';
import Button from "./../components/CustomButton/CustomButton.jsx";
import { FormInputs } from "./../components/FormInputs/FormInputs.jsx";
import {Card} from "./../components/Card/Card.jsx";
import {Tasks} from "./../components/Tasks/Tasks.jsx";
import {postTaskAdd, postTaskRemove, fetchTaskList, isLoggedIn} from "../actions";

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isShow: false,
            newTask: ''
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleNewTaskChange = this.handleNewTaskChange.bind(this);
    }

    handleClose() {
        this.props.postTaskAdd(this.state.newTask);
        this.setState({ isShow: false, newTask: '' });
    }

    handleShow() {
        this.setState({ isShow: true });
    }

    handleNewTaskChange(e) {
        this.setState({ newTask: e.target.value });
    }

    handleRemove(e) {
        const id = e.target.parentElement.parentElement.parentElement.getAttribute('id');
        this.props.postTaskRemove(id);
    }

    fetchData() {
        this.props.fetchTaskList();
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {tasks} = this.props;

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Button bsStyle="info"
                                    pullRight
                                    fill
                                    style={{
                                        marginBottom: 15
                                    }}
                                    onClick={this.handleShow}
                            >
                                Add New Task
                            </Button>
                            <Modal show={this.state.isShow} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>New Task</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form>
                                        <FormInputs
                                            ncols={["col-md-12"]}
                                            properties={[
                                                {
                                                    label: "",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "New Task",
                                                    value: `${this.state.newTask}`,
                                                    onChange: (this.handleNewTaskChange)
                                                }
                                            ]}
                                        />
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button bsStyle="info" fill onClick={this.handleClose}>
                                        Add New
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                        <Col md={12}>
                            <Card
                                title="Tasks"
                                category="Daily Todos"
                                stats="Updated 3 minutes ago"
                                statsIcon="fa fa-history"
                                content={
                                    <div className="table-full-width">
                                        <table className="table">
                                            <Tasks data={tasks} handleRemove={this.handleRemove} />
                                        </table>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      tasks: state.tasks.tasks
  }
};

export default connect(mapStateToProps, {postTaskAdd, postTaskRemove, fetchTaskList, isLoggedIn})(Dashboard);
