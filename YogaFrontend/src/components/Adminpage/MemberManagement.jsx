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
                    <h2>Member management</h2>
                    <ul>
                        <li className="adminMenu-li">Edit member</li>

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
