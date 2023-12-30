import PropTypes from "prop-types";

function Register({ handleChange, handleSubmit, btnText, showEmailField = true, inputs = {}, toggleForm }) {
  const { username, email, password } = inputs;

  return (
    <div className="flex items-center justify-center h-screen bg-whitegray">
      <div className="border border-black w-1/2 shadow-xl">
        <form onSubmit={handleSubmit} className="text-center p-4">
          <div className="mb-4">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Enter username"
              className="border p-2 w-full"
            />
          </div>

          {showEmailField && (
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter email"
                className="border p-2 w-full"
              />
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
              className="border p-2 w-full"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            {btnText}
          </button>
          
          <p onClick={toggleForm} className="mt-2 text-blue-500 underline cursor-pointer">
            Already a member? {btnText === "Sign up" ? "Login" : "Sign up"}
          </p>
        </form>
      </div>
    </div>
  );
}

Register.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  showEmailField: PropTypes.bool,
  inputs: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  toggleForm: PropTypes.func.isRequired,
};

export default Register;
