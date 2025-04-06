import { Navigate, Outlet } from "react-router-dom";

const AdminProtected = () => {
    const isLogin = true; // Replace with real logic
    const userRole: string = "admin"; // 'admin'

    return isLogin && userRole === "admin" ? (
        <Outlet />
    ) : (
        <Navigate to="/sign-in" />
    );
};

export default AdminProtected;
