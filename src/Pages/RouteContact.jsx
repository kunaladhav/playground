import RouteNavbar from "../components/RouteNavbar";

const RouteContact = () => {
  return (
    <div>
      <div>
        <RouteNavbar />
        <h1>Get in Touch</h1>
        <p>
          Have a project idea, a role to discuss, or just want to talk tech?
          Reach out through any channel below.
        </p>

        <ul>
          <li>Email: hello@developer.dev</li>
          <li>GitHub: github.com/dev-handle</li>
          <li>LinkedIn: linkedin.com/in/dev-handle</li>
          <li>Location: Pune, India (Available Remote)</li>
        </ul>
      </div>
    </div>
  );
};

export default RouteContact;
