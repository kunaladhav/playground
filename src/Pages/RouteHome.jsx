import RouteNavbar from "../components/RouteNavbar";

const RouteHome = () => {
  return (
    <div>
      <div>
        <RouteNavbar />

        <h1>Build Fast. Ship Clean.</h1>
        <p>
          Welcome to my digital workspace where modern web architecture meets
          intuitive user design. Explore my latest builds, tech stack, and
          engineering journey.
        </p>
        <div>
          <span>
            <strong>3+</strong> Years Experience
          </span>
          <span>
            <strong>15+</strong> Projects Shipped
          </span>
          <span>
            <strong>99%</strong> Uptime Focus
          </span>
        </div>
      </div>
    </div>
  );
};

export default RouteHome;
