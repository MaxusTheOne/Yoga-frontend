import { NavLink } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import AnimatedPage from '../AnimatedPage'

export default function EventManagement() {
    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="eventManagement-container">
                    <div className="menu-header">
                        <h2>Event management</h2>
                    </div>
                    <ul>
                        <li className="adminMenu-li">Add Event</li>
                        <li className="adminMenu-li">See all Events</li>

                        <NavLink to="/adminMenu">
                            <li className="adminMenu-li">To menu</li>
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
