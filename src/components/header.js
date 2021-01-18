import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Numberverse
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/trivia">
            Trivia
          </NavLink>
          <NavLink className="nav-item nav-link" to="/calculator">
            Calculator
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about">
            About
          </NavLink>
        </div>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
