import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";

const token = localStorage.getItem('access_token');

class App extends Component {

    render() {
        const RenderRedirect = () => {

            if (token) {
                return (
                    <Redirect from="/" to="/admin/dashboard"/>
                )
            }

            if (!token) {
                return (
                    <Redirect from="/" to="/auth/login"/>
                )
            }
        };

        return (
            <Router>
                <Switch>
                    {token && <Route path="/admin" render={props => <AdminLayout {...props} />}/>}
                    {!token && <Route path="/auth" render={props => <AuthLayout {...props} />}/>}
                    <RenderRedirect/>
                </Switch>
            </Router>
        );
    }
}

export default App;

