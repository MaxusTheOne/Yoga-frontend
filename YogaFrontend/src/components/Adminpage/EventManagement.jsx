import { NavLink } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'
import AnimatedPage from '../AnimatedPage'
import { useState } from 'react'
import AddEventForm from './AddEventForm'

export default function EventManagement() {
    const [openDialog, setOpenDialog] = useState(false)

    function handleOpenDialog() {
        setOpenDialog(true)
    }

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
                    <ul>
                        <li onClick={handleOpenDialog} className="adminMenu-li">
                            Add Event
                        </li>
                        <li className="adminMenu-li">See all Events</li>
                        {openDialog && (
                            <AddEventForm
                                handleCloseDialog={handleCloseDialog}
                            />
                        )}
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
