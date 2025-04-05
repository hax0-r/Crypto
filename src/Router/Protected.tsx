import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const isLogin = true;

  return isLogin ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default Protected;
