import { NavLink } from 'react-router-dom'
import AnimatedPage from '../../Homepage/AnimatedPage'
import Footer from '../../Homepage/Footer'
import Header from '../../Homepage/Header'

export default function EventSignups() {
    return (
        <>
            <Header />
            <AnimatedPage>
                <h1>welcome to eventsignups overview</h1>
                <NavLink to="/adminMenu">
                    <li>&#8594;To menu &#8592;</li>
                </NavLink>
            </AnimatedPage>
            <Footer />
        </>
    )
}
