import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import Login from "views/Login.jsx";
import Register from "views/Register.jsx";

const dashboardRoutes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        layout: "/auth"
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        layout: "/auth"
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "pe-7s-graph",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/user",
        name: "User Profile",
        icon: "pe-7s-user",
        component: UserProfile,
        layout: "/admin"
    },
];

export default dashboardRoutes;
