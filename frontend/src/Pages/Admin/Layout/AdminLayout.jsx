import { Outlet } from "react-router-dom";
import AdminNavBar from "../../../Components/NavigationBar/AdminNavBar";
import AdminSideBar from "../../../Components/NavigationBar/AdminSideBar";
import AdminFooter from "../../../Components/Footer/AdminFooter";

const AdminLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <AdminSideBar />
            <div className="flex-1 flex flex-col">
                <AdminNavBar />
                <main className="flex-1 p-4 overflow-auto">
                    <Outlet />
                </main>
                <AdminFooter />
            </div>
        </div>
    );
};

export default AdminLayout;
