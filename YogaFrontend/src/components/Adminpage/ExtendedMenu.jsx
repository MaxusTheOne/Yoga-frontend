import { NavLink } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import AnimatedPage from '../AnimatedPage'

export default function ExtendedMenu() {
    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="menu-container">
                    <h2>Menu</h2>
                    <ul>
                        <NavLink to="/memberManagement">
                            <li className="adminMenu-li">Manage members</li>
                        </NavLink>
                        <NavLink to="/contentManagement">
                            <li className="adminMenu-li">Manage Content</li>
                        </NavLink>
                        <NavLink to="/eventManagement">
                            <li className="adminMenu-li">Manage Events</li>
                        </NavLink>
                        <NavLink to="/">
                            <div className="logout-button-container">
                                <button className="logout-button">
                                    Logout
                                </button>
                            </div>
                        </NavLink>
                    </ul>
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
