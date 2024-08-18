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
import Admin from "./Pages/Website/Login";
import ChhatDiamond from "./Pages/Website/ChhatDiamond";
import ChhatResearch from "./Pages/Website/ChhatResearch";

const App = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

const AppRoutes = () => {
    const location = useLocation();
    //hide navbar in login page
    const hideNavbar = location.pathname !== "/login";

    return (
        <div className="App">
            {hideNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/career" element={<Career />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<Admin />} />
                <Route path="/chhat-diamond" element={<ChhatDiamond />} />
                <Route path="/chhat-research" element={<ChhatResearch />} />
            </Routes>
            {hideNavbar && <Footer />}
        </div>
    );
};

export default App;
