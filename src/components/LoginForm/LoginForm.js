import { useState } from "react";

const LoginForm = () => {
  const initialFormValue = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialFormValue);

  const handleInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValues.username === "" || formValues.password === "") {
      return;
    }
    setFormValues(initialFormValue);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={formValues.username}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={formValues.password}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
