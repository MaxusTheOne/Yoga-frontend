import { NavLink } from "react-router-dom";


export default function NavBar() {
  return (
    <nav className="nav-container">
      <ul className="nav-items">
        <NavLink to="/">homepage</NavLink>
        <NavLink to="/media">media</NavLink>
        <NavLink to="/events">events</NavLink>
        <NavLink to="/admin">admin</NavLink>
      </ul>
    </nav>
  );
}
