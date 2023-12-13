import { NavLink } from 'react-router-dom'

//Navbar for all other pages, except homepage, as it only includes home and contact buttons
export default function NavBar() {
    NavBar.propTypes

    return (
        <nav className="nav-container">
            <ul className="nav-items">
                <NavLink to="/">home</NavLink>
                <NavLink to="/contact">contact</NavLink>
            </ul>
        </nav>
    )
}
