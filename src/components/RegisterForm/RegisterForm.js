import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunks/userThunks";
import RegisterFormStyle from "./RegisterFormStyle";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const blankFields = {
    name: "",
    username: "",
    password: "",
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
    dispatch(registerThunk(formData));
    setFormData(blankFields);
  };

  return (
    <RegisterFormStyle>
      <form autoComplete="off" noValidate onSubmit={submitRegister}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={changeData}
          placeholder="Name"
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={changeData}
          placeholder="Username"
        />
        <label htmlFor="password">Password</label>
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
