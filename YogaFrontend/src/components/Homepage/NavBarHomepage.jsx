import { NavLink } from 'react-router-dom'

//Navbar only for header on homepage as it includes scroll buttons that only work on homepage
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
