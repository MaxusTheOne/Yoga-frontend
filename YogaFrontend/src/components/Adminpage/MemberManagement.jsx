import { NavLink } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import AnimatedPage from '../AnimatedPage'

export default function MemberManagement() {
    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="memberManagement-container">
                    <div className="menu-header">
                        <h2>Member management</h2>
                    </div>
                    <ul>
                        <li className="adminMenu-li">Edit member</li>
                        <li className="adminMenu-li">See all members</li>

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
