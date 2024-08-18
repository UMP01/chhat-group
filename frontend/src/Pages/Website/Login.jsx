import Logo from "../../assets/Images/logo.png";
import LogoBackground from "../../assets/Images/login-bg.jpg";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8" 
            style={{ backgroundImage: `url(${LogoBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src={Logo} alt="Your Company" />
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mb-5 text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in
                </h2>
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <Link 
                                    to="#" 
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                    style={{ color: 'var(--primary-color)' }}  
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        style={{ backgroundColor: 'var(--primary-color)' }}
                    >
                        Login
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
