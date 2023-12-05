import { useState } from 'react'
import AnimatedPage from '../Homepage/AnimatedPage'
import Footer from '../Homepage/Footer'
import Header from '../Homepage/Header'
import Login from './Login'
import AdminMenu from './Menu overview/AdminMenu'

export default function AdminPage() {
    const [isLoggedIn, setLoggedIn] = useState(false)

    function checkLogin() {
        setLoggedIn(true)
    }

    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="adminPage-container">
                    {!isLoggedIn ? (
                        <Login checkLogin={checkLogin} />
                    ) : (
                        <AnimatedPage>
                            <AdminMenu isLoggedIn={isLoggedIn} />
                        </AnimatedPage>
                    )}
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
