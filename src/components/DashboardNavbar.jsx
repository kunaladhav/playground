import { NavLink } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <div>
      <div>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <NavLink
              to={"/dashboard"}
              style={({ isActive }) => ({
                background: isActive ? "black" : "white",
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "white" : "black",
                textDecoration: "none",
              })}
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/projects"}
              style={({ isActive }) => ({
                background: isActive ? "black" : "white",
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "white" : "black",
                textDecoration: "none",
              })}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/tasks"}
              style={({ isActive }) => ({
                background: isActive ? "black" : "white",
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "white" : "black",
                textDecoration: "none",
              })}
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/settings"}
              style={({ isActive }) => ({
                background: isActive ? "black" : "white",
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "white" : "black",
                textDecoration: "none",
              })}
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/profile"}
              style={({ isActive }) => ({
                background: isActive ? "black" : "white",
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "white" : "black",
                textDecoration: "none",
              })}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
