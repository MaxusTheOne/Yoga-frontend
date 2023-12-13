import { NavLink } from 'react-router-dom'
import Footer from '../../Homepage/Footer'
import Header from '../../Homepage/Header'
import AnimatedPage from '../../Homepage/AnimatedPage'
import { useState } from 'react'
import AddEventForm from './AddEventForm'

export default function EventManagement() {
    const [openDialog, setOpenDialog] = useState(false)

    // Function to open the event creation dialog
    function handleOpenDialog() {
        setOpenDialog(true)
    }

    // Function to close the event creation dialog
    function handleCloseDialog() {
        setOpenDialog(false)
    }

    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="eventManagement-container">
                    <div className="menu-header">
                        <h2>Event management</h2>
                    </div>

                    {/* List of menu options */}
                    <ul>
                        {/* Conditional rendering of AddEventForm when the dialog is open */}
                        {openDialog && (
                            <AddEventForm
                                handleCloseDialog={handleCloseDialog}
                            />
                        )}

                        {/* Menu option to open the AddEventForm dialog */}
                        <li onClick={handleOpenDialog} className="adminMenu-li">
                            Add event
                        </li>

                        {/* Navigation links to other event-related pages */}
                        <NavLink to="/eventSignups">
                            <li className="adminMenu-li">See event signups</li>
                        </NavLink>
                        <NavLink to="/adminMenu">
                            <li className="adminMenu-li">
                                &#8594;To menu &#8592;
                            </li>
                        </NavLink>
                    </ul>
                </div>

                {/* Navigation link to the login page on click logout */}
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
