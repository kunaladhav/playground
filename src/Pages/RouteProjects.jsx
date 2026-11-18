import RouteNavbar from "../components/RouteNavbar";

const RouteProjects = () => {
  return (
    <div>
      <div>
        <RouteNavbar />
        <h1>Selected Works</h1>
        <p>
          A curated list of full-stack web applications, developer tools, and
          open-source experiments.
        </p>

        <article>
          <h3>TaskFlow Kanban Engine</h3>
          <p>
            A drag-and-drop sprint board with real-time state updates, custom
            filters, and local storage persistence.
          </p>
          <small>React • TailwindCSS • Node.js</small>
        </article>

        <article>
          <h3>PulseAPI Monitor</h3>
          <p>
            Lightweight endpoint health dashboard that tracks response latency
            and alerts teams on downtime spikes.
          </p>
          <small>JavaScript • Express • MongoDB</small>
        </article>

        <article>
          <h3>Markdown Vault</h3>
          <p>
            Distraction-free, offline-first note-taking app with instant tag
            search and dark mode support.
          </p>
          <small>React Router • LocalStorage • CSS</small>
        </article>
      </div>
    </div>
  );
};

export default RouteProjects;
