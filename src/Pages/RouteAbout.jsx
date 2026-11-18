import RouteNavbar from "../components/RouteNavbar";

const RouteAbout = () => {
  return (
    <div>
      <div>
        <RouteNavbar />
        <h1>Behind the Code</h1>
        <p>
          I am a full-stack developer passionate about turning complex system
          requirements into fast, accessible web interfaces. I focus on clean
          architecture, reusable components, and zero-bloat performance.
        </p>

        <h3>Core Stack</h3>
        <ul>
          <li>Frontend: React, JavaScript (ES6+), TailwindCSS</li>
          <li>Backend: Node.js, Express, REST APIs</li>
          <li>Database & Tools: MongoDB, Git, Vite</li>
        </ul>
      </div>
    </div>
  );
};

export default RouteAbout;
