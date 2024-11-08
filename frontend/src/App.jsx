// App.js
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Website/Home";
import Contact from "./Pages/Website/Contact";
import Navbar from "./Components/NavigationBar/NavigationBar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/Website/AboutUs";
import Career from "./Pages/Website/Career";
import AddCareer from "./Components/Career/AddCareer.jsx";
import EditCareer from "./Components/Career/EditCareer.jsx";
import Blog from "./Pages/Website/Blog";
import BlogDetail from "./Components/ContentChhatReasech/BlogDetail";
import ChhatResearch from "./Pages/Website/ChhatResearch";
import ChhatDiamond from "./Pages/Website/ChhatDiamond";
import ChhatCapital from "./Pages/Website/ChhatCapital";
import ChhatTrading from "./Pages/Website/ChhatTrading";
import ChhatRealEstate from "./Pages/Website/ChhatRealEstate";
import ChhatConstruction from "./Pages/Website/ChhatConstruction";
import ChhatAgriculture from "./Pages/Website/ChhatAgriculture";
import ChhatCosmetic from "./Pages/Website/ChhatCosmetic";
import Admin from "./Pages/Website/Login";
import AdminLayout from "./Pages/Admin/Layout/AdminLayout";
import AdminDashboard from "./Pages/Admin/Dashboard";
import AdminUser from "./Pages/Admin/User";
import AdminCareer from "./Pages/Admin/Career";
import AdminBlog from "./Pages/Admin/Blog.jsx";
import AdminProfile from "./Pages/Admin/AdminProfile";
import AdminContact from "./Pages/Admin/Contact";
import ProtectedRoute from "./api/ProtectedRoute.js";
import CareerDetails from './Pages/Website/CareerDetails';
import SentContactDetails from "./Components/Contact/SentContactDetails.jsx";

if (process.env.NODE_ENV === 'production') {
    console.log = function() {};
}

const App = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

const AppRoutes = () => {
    const location = useLocation();
    const hideNavbarAndFooter = location.pathname.startsWith("/admin");

    return (
        <div className="App">
            {!hideNavbarAndFooter && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/career" element={<Career />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/chhat-research" element={<ChhatResearch />} />
                <Route path="/chhat-diamond" element={<ChhatDiamond />} />
                <Route path="/chhat-capital" element={<ChhatCapital />} />
                <Route path="/chhat-trading" element={<ChhatTrading />} />
                <Route path="/careerdetails/:id" element={<CareerDetails />} />
                <Route
                    path="/chhat-real-estate"
                    element={<ChhatRealEstate />}
                />
                <Route
                    path="/chhat-construction"
                    element={<ChhatConstruction />}
                />
                <Route
                    path="/chhat-agriculture"
                    element={<ChhatAgriculture />}
                />
                <Route path="/chhat-cosmetic" element={<ChhatCosmetic />} />
                <Route path="/admin/login" element={<Admin />} />

                {/* Admin protected routes */}
                <Route
                    path="/admin/*"
                    element={
                        <ProtectedRoute>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="blog" element={<AdminBlog />} />
                    <Route path="career" element={<AdminCareer />} />
                    <Route path="career/add" element={<AddCareer />} />
                    <Route path="career/edit/:id" element={<EditCareer />} />
                    <Route path="user" element={<AdminUser />} />
                    <Route path="profile" element={<AdminProfile />} />
                    <Route path="contact" element={<AdminContact />} />
                    <Route path="contact/sent/:id" element={<SentContactDetails />} /> {/* Dynamic route for contact details */}

                </Route>
            </Routes>
            {!hideNavbarAndFooter && <Footer />}
        </div>
    );
};

export default App;
