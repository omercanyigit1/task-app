import React, {Component} from "react";
import {Tooltip, OverlayTrigger} from "react-bootstrap";
import Checkbox from "./../../components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "./../../components/CustomButton/CustomButton.jsx";

export class Tasks extends Component {

    render() {
        const {data, handleRemove} = this.props;

        const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
        const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
        var number;

        return (
            <tbody>
        {data.map((task, i) => {
                number = "checkbox" + i;
                return (
                    <tr key={i} id={task._id}>
                        <td>
                            <Checkbox
                                number={number}
                                isChecked={task.completed ? true : false}
                            />
                        </td>
                        <td>{task.description}</td>
                        <td className="td-actions text-right">
                            <OverlayTrigger placement="top" overlay={edit}>
                                <Button bsStyle="info" simple type="button" bsSize="xs">
                                    <i className="fa fa-edit"/>
                                </Button>
                            </OverlayTrigger>

                            <OverlayTrigger placement="top" overlay={remove}>
                                <Button bsStyle="danger" simple type="button" bsSize="xs" onClick={handleRemove}>
                                    <i className="fa fa-times" />
                                </Button>
                            </OverlayTrigger>
                        </td>
                    </tr>
                )
            })
        }
        </tbody>);
    }
}

export default Tasks;
