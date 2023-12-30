import { useState, useContext } from "react";
import Register from "../pages/register";
import { UserContext } from "../content/UserProvider";

export default function Auth() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [toggle, setToggle] = useState(false);
  const { signup, login } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSignup(e) {
    e.preventDefault();
    console.log("Submitting signup with inputs:", inputs);
    signup(inputs);
  }

  function handleLogin(e) {
    e.preventDefault();
    console.log("Submitting login with inputs:", inputs);
    login(inputs);
  }

  function toggleForm() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <div className="">
      <div>
        <Register
          handleChange={handleChange}
          handleSubmit={toggle ? handleSignup : handleLogin}
          btnText={toggle ? "Sign up" : "Login"}
          showEmailField={toggle}
          inputs={inputs}
          toggleForm={toggleForm}
        />
  
      </div>
    </div>
  );
}
