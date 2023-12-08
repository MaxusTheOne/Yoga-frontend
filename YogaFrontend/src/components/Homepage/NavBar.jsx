import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="nav-container">
            <ul className="nav-items">
                <NavLink to="/">home</NavLink>
                <NavLink to="/media">how I help you</NavLink>
                <NavLink to="/events">ask me a question</NavLink>
                <NavLink to="/admin">contact</NavLink>
            </ul>
        </nav>
    )
}
