import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ShopHub
        </Link>
        <div className="navbar-links">
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/checkout">
            Cart
          </Link>
        </div>
        <div className="navbar-auth">
          <div className="navbar-auth-links">
            <Link className="btn btn-secondary" to="/auth">
              Sign In
            </Link>
            <Link className="btn btn-primary" to="/auth">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
