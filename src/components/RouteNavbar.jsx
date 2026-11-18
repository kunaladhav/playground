import { NavLink } from "react-router-dom";

const RouteNavbar = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Contacts</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RouteNavbar;
