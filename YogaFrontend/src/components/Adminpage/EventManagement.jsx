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
                    <h2>Event management</h2>
                    <ul>
                        <li className="adminMenu-li">Add Event</li>

                        <NavLink to="/adminMenu">
                            <li className="adminMenu-li">To menu</li>
                        </NavLink>
                    </ul>
                    <NavLink to="/">
                        <button className="logout-button">Logout</button>
                    </NavLink>
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
