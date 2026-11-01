import useAuth from "../hooks/useAuth";

const AuthNavbar = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <div>
        <p>Navbar</p>

        <p>{user ? `Welcome, ${user.name}` : "Login Required"}</p>

        <button onClick={user ? logout : login}>
          {user ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthNavbar;
