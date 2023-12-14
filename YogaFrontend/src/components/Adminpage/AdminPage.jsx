import { useState } from 'react'
import AnimatedPage from '../Homepage/AnimatedPage'
import Footer from '../Homepage/Footer'
import Header from '../Homepage/Header'
import Login from './Login'
import AdminMenu from './MenuOverview/AdminMenu'

// AdminPage component for managing administrator access
export default function AdminPage() {
    // State to track the login status
    const [isLoggedIn, setLoggedIn] = useState(false)

    // Function to update the login status when called
    function checkLogin() {
        setLoggedIn(true)
    }

    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="adminPage-container">
                    {/* Conditional rendering based on login status */}
                    {!isLoggedIn ? (
                        // Display Login component if not logged in
                        <Login checkLogin={checkLogin} />
                    ) : (
                        // Display AdminMenu component if logged in
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
