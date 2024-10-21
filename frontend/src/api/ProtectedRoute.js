// ProtectedRoute.js
import { useLocation } from "react-router-dom";

const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
};

const getUserPermission = () => {
    return localStorage.getItem("permission");
};

const ProtectedRoute = ({ children }) => {
    const location = useLocation();

        if (!isAuthenticated()) {
            window.location.href = "/admin/login";
        return null;
    }

    const permission = getUserPermission();
    if (permission === "user" && location.pathname.includes("/admin/user")) {
        window.location.href = "/";
        return null;
    }

    return children;
};

export default ProtectedRoute;
