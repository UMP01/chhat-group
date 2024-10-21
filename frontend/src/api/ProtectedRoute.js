import React, { useEffect } from "react";

const isAuthenticated = () => {
    return localStorage.getItem("authToken") !== null;
};

const ProtectedRoute = ({ children }) => {
    useEffect(() => {
        if (!isAuthenticated()) {
            window.location.href = "/admin/login";
        }
    }, []);

    return isAuthenticated() ? children : null;
};

export default ProtectedRoute;
