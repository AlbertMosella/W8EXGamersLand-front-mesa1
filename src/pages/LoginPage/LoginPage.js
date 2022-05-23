import { NavLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <h2>User Login</h2>
      <LoginForm />
      <NavLink to="/register">Register</NavLink>
    </>
  );
};

export default LoginPage;
