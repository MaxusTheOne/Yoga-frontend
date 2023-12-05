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
                    <div className="menu-header">
                        <h2>Menu</h2>
                    </div>
                    <ul>
                        <NavLink to="/memberOverview">
                            <li className="adminMenu-li">Manage members</li>
                        </NavLink>
                        <NavLink to="/contentManagement">
                            <li className="adminMenu-li">Manage Content</li>
                        </NavLink>
                        <NavLink to="/eventManagement">
                            <li className="adminMenu-li">Manage Events</li>
                        </NavLink>
                    </ul>
                </div>
                <NavLink to="/admin">
                    <div className="logout-button-container">
                        <button className="logout-button">Logout</button>
                    </div>
                </NavLink>
            </AnimatedPage>
            <Footer />
        </>
    )
}
