import { Link } from "react-router-dom";

const RouteDashboard = () => {
  return (
    <div>
      <div>
        <h1>Welcome!</h1>
        <ul>
          <li>
            <h2>Total Projects - 12</h2>
            <h3>Pending tasks - 5</h3>
            <h3>Completed tasks - 18</h3>
          </li>
        </ul>
        <Link to={"/dashboard/projects"}>View All Projects</Link>
      </div>
    </div>
  );
};

export default RouteDashboard;
