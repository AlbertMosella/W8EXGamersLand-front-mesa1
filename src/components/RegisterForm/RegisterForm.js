import { useEffect, useState } from "react";
import RegisterFormStyle from "./RegisterFormStyle";

const RegisterForm = () => {
  const blankFields = {
    name: "",
    username: "",
    password: "",
    img: "",
  };

  const [formData, setFormData] = useState(blankFields);
  const [buttonDisabled, setButtonDisabled] = useState(blankFields);

  useEffect(() => {
    if (
      formData.username !== "" &&
      formData.password !== "" &&
      formData.name !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitRegister = (event) => {
    event.preventDefault();
    setFormData(blankFields);
  };

  return (
    <RegisterFormStyle>
      <form autoComplete="off" noValidate onSubmit={submitRegister}>
        <label htmlFor="name" />
        <input
          id="name"
          value={formData.name}
          onChange={changeData}
          placeholder="Name"
        />
        <label htmlFor="username" />
        <input
          id="username"
          value={formData.username}
          onChange={changeData}
          placeholder="Username"
        />
        <label htmlFor="password" />
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          placeholder="Password"
        />
        <button disabled={buttonDisabled} type="submit" className="form-button">
          create
        </button>
      </form>
    </RegisterFormStyle>
  );
};

export default RegisterForm;
