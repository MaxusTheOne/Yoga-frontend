import { NavLink } from 'react-router-dom'
import Header from '../../Homepage/Header'
import Footer from '../../Homepage/Footer'
import AnimatedPage from '../../Homepage/AnimatedPage'

//Menu component WITH logout button for styling purposes there are 2 components that are quite similar
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
                {/* Clicking this navlink effectively logs you out of the admin overview and returns you to the login page */}
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
