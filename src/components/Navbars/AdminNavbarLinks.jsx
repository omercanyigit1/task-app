import React, {Component} from "react";
import {Nav, NavDropdown, MenuItem} from "react-bootstrap";

class AdminNavbarLinks extends Component {
    render() {
        return (
            <div>
                <Nav pullRight>
                    <NavDropdown eventKey={3} title={`${localStorage.getItem("user_name")}`} id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} href="/auth/login" onClick={() => {
                            localStorage.removeItem("access_token");
                        }}>Log Out</MenuItem>
                    </NavDropdown>
                </Nav>
            </div>
        );
    }
}

export default AdminNavbarLinks;
