import { Link, Outlet } from "react-router-dom";

const RouteDashboardProfile = () => {
  return (
    <div>
      <div>
        <h3>Profile Section</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to={"account"}>Account</Link>
        <Link to={"security"}>Security</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RouteDashboardProfile;
