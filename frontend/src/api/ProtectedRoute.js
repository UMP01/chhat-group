import { useLocation, useNavigate } from "react-router-dom";

const isAuthenticated = () => {
    return localStorage.getItem("authToken") !== null;
};

const getUserPermission = () => {
    return localStorage.getItem("permission");
};

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    if (!isAuthenticated()) {
        navigate("/admin/login", { replace: true });
        return null;
    }

    const permission = getUserPermission();
    if (permission === "user" && location.pathname.includes("/admin/user")) {
        navigate("/", { replace: true });
        return null;
    }

    return children;
};

export default ProtectedRoute;
