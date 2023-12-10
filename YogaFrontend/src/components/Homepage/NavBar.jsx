import { NavLink } from 'react-router-dom'

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
