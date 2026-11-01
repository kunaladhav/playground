import AuthNavbar from "../components/AuthNavbar";
import AuthProfile from "../components/AuthProfile";
import AuthContextProvider from "../context/AuthContext";

const AuthApp = () => {
  return (
    <div>
      <div>
        <AuthContextProvider>
          <AuthNavbar />
          <AuthProfile />
        </AuthContextProvider>
      </div>
    </div>
  );
};

export default AuthApp;
