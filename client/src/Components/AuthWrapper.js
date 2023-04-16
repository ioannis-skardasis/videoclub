import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function AuthWrapper() {
  const location = useLocation();
  const token = localStorage.getItem("token");
  

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default AuthWrapper;

// https://stackoverflow.com/questions/70704613/react-router-dom-navigate-method-is-not-working-properly
// this protects the Routes.