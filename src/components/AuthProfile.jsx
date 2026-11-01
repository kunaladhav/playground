import useAuth from "../hooks/useAuth";

const AuthProfile = () => {
  const { user } = useAuth();

  return (
    <div>
      <div>
        <p>Profile</p>
        {user ? (
          <p>
            Name: {user.name} <br /> Email: {user.email}
          </p>
        ) : (
          <p>No User Logged in</p>
        )}
      </div>
    </div>
  );
};

export default AuthProfile;
