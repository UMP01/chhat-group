import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";
import LogoBackground from "../../assets/Images/login-bg.jpg";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        // After successful login, navigate to the dashboard
        navigate("/admin/dashboard");
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
                            alt="Chhat Group"
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
                                        value={"phoudy@gmail.com"}
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
                                        value={"12345678"}
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
                                    className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-normal leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    style={{
                                        backgroundColor: "var(--primary-color)",
                                    }}
                                >
                                    Login
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
