import { NavLink } from 'react-router-dom'

export default function NavBarHomePage({ scrollToFAQ, scrollToHIH }) {
    NavBarHomePage.propTypes

    return (
        <nav className="nav-container">
            <ul className="nav-items">
                <NavLink to="/">home</NavLink>
                <li className="navBar-li" onClick={scrollToHIH}>
                    how I help you
                </li>
                <li className="navBar-li" onClick={scrollToFAQ}>
                    FAQ
                </li>
                <NavLink to="contact">contact</NavLink>
            </ul>
        </nav>
    )
}
