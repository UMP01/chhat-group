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
import AdminChhatGroupBlog from "./Pages/Admin/ChhatGroupBlog";
import AdminChhatResearchBlog from "./Pages/Admin/ChhatReseachBlog";
import AdminProfile from "./Pages/Admin/AdminProfile";
import AdminContact from "./Pages/Admin/Contact";

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
                {/* <Route path="/admin/*" element={<AdminLayout />} /> */}

                <Route path="/admin/*" element={<AdminLayout />}>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route
                        path="chhat-group-blog"
                        element={<AdminChhatGroupBlog />}
                    />
                    <Route
                        path="chhat-research-blog"
                        element={<AdminChhatResearchBlog />}
                    />
                    <Route path="career" element={<AdminCareer />} />
                    <Route path="user" element={<AdminUser />} />
                    <Route path="profile" element={<AdminProfile />} />
                    <Route path="contact" element={<AdminContact />} />
                </Route>
            </Routes>
            {!hideNavbarAndFooter && <Footer />}
        </div>
    );
};

export default App;
