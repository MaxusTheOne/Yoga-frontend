import { NavLink } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import AnimatedPage from '../AnimatedPage'

export default function ContentManagement() {
    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="contentManagement-container">
                    <h2>Content management</h2>
                    <ul>
                        <li className="adminMenu-li">Add Content</li>

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
