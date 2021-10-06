import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/winner">
        winner
      </NavLink>
      <NavLink activeClassName="active" to="/fetch-users">
        git user lists
      </NavLink>
      <NavLink activeClassName="active" to="/count">
        Count
      </NavLink>
      <NavLink activeClassName="active" to="/check-box">
        Check-Box
      </NavLink>
      <NavLink activeClassName="active" to="/bark">
        Bark
      </NavLink>
      <NavLink activeClassName="active" to="/input-style">
        Input-style
      </NavLink>
      <NavLink activeClassName="active" to="/use-state">
        UseState
      </NavLink>
      <NavLink activeClassName="active" to="/rating">
        Rating
      </NavLink>
      <NavLink activeClassName="active" to="/trees">
        Trees
      </NavLink>
    </nav>
  );
}
