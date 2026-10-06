import { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const isNameVaild = name.trim().length > 0;
  const isEmailValid = email.includes("@");
  const isPasswordValid = password.length >= 6;
  const passwordMatch = password === confirmPassword;
  const isFormVaild =
    isNameVaild && isEmailValid && isPasswordValid && passwordMatch;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <p>Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
          />
          {emailTouched && !isEmailValid && <p>Please Enter Vaild Email</p>}
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordTouched(true)}
          />
          {passwordTouched && !isPasswordValid && (
            <p>Please enter more than 6 letter Password</p>
          )}
        </div>
        <div>
          <p>Confirm Password</p>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => setConfirmPasswordTouched(true)}
          />
          {confirmPasswordTouched && !passwordMatch && (
            <p>The Passwords Don Not Match, Please re-enter correct password</p>
          )}
        </div>
        <div>
          <button disabled={!isFormVaild}>Create Account</button>
        </div>
      </form>

      {submitted && <p>Account Successfully Created</p>}
    </div>
  );
};

export default SignupForm;
