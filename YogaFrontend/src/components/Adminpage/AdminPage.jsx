import { useState } from 'react'
import AnimatedPage from '../AnimatedPage'
import Footer from '../Footer'
import Header from '../Header'
import Login from './Login'
import AdminMenu from './AdminMenu'

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
