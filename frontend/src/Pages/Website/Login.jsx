import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import LogoBackground from "../../assets/Images/login-bg.jpg";
import Swal from "sweetalert2"; // For alerts
import axios from "axios"; // For API calls

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:8000/api/login",
                {
                    email,
                    password,
                }
            );

            // Handle success response
            if (response.data.status === "success") {
                localStorage.setItem("authToken", response.data.token);
                localStorage.setItem("userId", response.data.user.id); 
                localStorage.setItem("userName", response.data.user.name);
                localStorage.setItem("permission", response.data.user.permission);
                navigate("/admin/dashboard");
            } else {
                Swal.fire("Error", response.data.message, "error");
            }
        } catch (error) {
            console.error("Login error:", error);
            if (error.response && error.response.status === 422) {
                const errors = error.response.data.errors;
                const errorMessage = Object.values(errors).flat().join(", ");
                Swal.fire(
                    "Error",
                    errorMessage || "Invalid login credentials. Please try again.",
                    "error"
                );
            } else {
                Swal.fire("Error", "An unexpected error occurred.", "error");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="flex flex-col min-h-screen px-6 py-12 lg:px-8"
            style={{
                backgroundImage: `url(${LogoBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex flex-col justify-between">
                <div className="flex flex-col justify-start mb-8 mt-16">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-16 w-auto"
                            src={Logo}
                            alt="Logo"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-md font-normal leading-6 text-gray-800"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-md font-normal leading-6 text-gray-800"
                                    >
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <Link
                                            to="#"
                                            className="font-normal text-indigo-600 hover:text-indigo-500"
                                            style={{
                                                color: "var(--primary-color)",
                                            }}
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-normal leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    style={{
                                        backgroundColor: "var(--primary-color)",
                                    }}
                                >
                                    {isLoading ? "Logging in..." : "Login"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
