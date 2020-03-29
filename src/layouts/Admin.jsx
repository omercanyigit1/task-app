import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import NotificationSystem from "react-notification-system";

import AdminNavbar from "./../components/Navbars/AdminNavbar";
import Footer from "./../components/Footer/Footer";
import Sidebar from "./../components/Sidebar/Sidebar";

import {style} from "./../variables/Variables.jsx";
import routes from "./../routes.js";
import image from "./../assets/img/sidebar-3.jpg";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _notificationSystem: null,
            image: image,
            color: "black",
            hasImage: true,
            fixedClasses: "dropdown show-dropdown open"
        };
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={props => (
                            <prop.component
                                {...props}
                            />
                        )}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    componentDidUpdate(e) {
        if (
            window.innerWidth < 993 &&
            e.history.location.pathname !== e.location.pathname &&
            document.documentElement.className.indexOf("nav-open") !== -1
        ) {
            document.documentElement.classList.toggle("nav-open");
        }
        if (e.history.action === "PUSH") {
            document.documentElement.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
            this.refs.mainPanel.scrollTop = 0;
        }
    }

    render() {
        return (
            <div className="wrapper">
                <NotificationSystem ref="notificationSystem" style={style}/>
                <Sidebar {...this.props} routes={routes}
                         image={this.state.image}
                         color={this.state.color}
                         hasImage={this.state.hasImage}/>
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <AdminNavbar
                        {...this.props}
                    />
                    <Switch>
                        {this.getRoutes(routes)}
                    </Switch>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Admin;
