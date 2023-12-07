import { NavLink } from 'react-router-dom'
import Footer from '../../Homepage/Footer'
import Header from '../../Homepage/Header'
import AnimatedPage from '../../Homepage/AnimatedPage'

export default function ContentManagement() {
    ContentManagement.propTypes

    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="contentManagement-container">
                    <div className="menu-header">
                        <h2>Content management</h2>
                    </div>
                    <ul>
                        <li className="adminMenu-li">Add content</li>
                        <NavLink to="/contentOverview">
                            <li className="adminMenu-li">See all content</li>
                        </NavLink>

                        <NavLink to="/adminMenu">
                            <li className="adminMenu-li">
                                &#8594;To menu &#8592;
                            </li>
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
