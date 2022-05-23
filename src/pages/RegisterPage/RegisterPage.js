import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <h2>User Register</h2>
      <RegisterForm />
      <NavLink to="/login">Login</NavLink>
    </>
  );
};

export default RegisterPage;
