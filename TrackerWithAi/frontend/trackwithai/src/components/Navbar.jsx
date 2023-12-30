import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../content/UserProvider';

const Navbar = () => {
  const { logout, token } = useContext(UserContext);

  return (
    <div className="container max-w-full mt-2">
      <div className="flex justify-between">
        <h3 className="ml-2">
          <Link to="/">FOODY CHAT</Link>
        </h3>

        <div className="flex justify-end space-x-4">
          <Link to="/home">HOME</Link>
          <Link to="/foodentry">Food Entry</Link>
          <Link to='/dashboard'>Dashboard</Link>
            {/* if token is true return null -- if not register link appears */}
          {token ? null : <Link to="/register">Register</Link>}
          {/* Render the logout button if the token is truthy */}
          {token && <button onClick={logout}>Logout</button>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
