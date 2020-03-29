import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Footer from "./../components/Footer/Footer";
import routes from "./../routes.js";
import image from "./../assets/img/sidebar-3.jpg";

class Auth extends Component {
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
            if (prop.layout === "/auth") {
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

    componentDidMount() {

    }

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

        }

    }

    render() {
        return (
            <div className="wrapper">
                <div id="main-panel" className="main-panel auth-main-panel" ref="mainPanel">
                    <Switch>
                        {this.getRoutes(routes)}
                    </Switch>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Auth;
