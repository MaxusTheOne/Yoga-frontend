import { useState } from 'react'
import EventDialog from './EventDialog'

export default function EventCard({ matchingEvent }) {
    EventCard.propTypes

    const [showSignUpForm, setShowSignUpForm] = useState(false)

    const [dialogStatus, setDialogStatus] = useState(false)

    function openEventDialog() {
        setDialogStatus(true)
    }

    function closeEventDialog() {
        setDialogStatus(false)
        setShowSignUpForm(false)
    }

    function handleSignUpClick() {
        setShowSignUpForm(true)
    }

    function handleSignUp(userData) {
        // Handle the sign-up logic, e.g., send data to the server
        console.log('Sign-up data:', userData)
        // You can also close the form here if needed
        setShowSignUpForm(false)
    }

    return (
        <div className="eventCard">
            <h3 onClick={openEventDialog} className="eventCard-title">
                {matchingEvent.title}
            </h3>
            <div className="calendarCard-button-container"></div>
            {dialogStatus && (
                <EventDialog
                    handleSignUp={handleSignUp}
                    showSignUpForm={showSignUpForm}
                    setShowSignUpForm={setShowSignUpForm}
                    handleSignUpClick={handleSignUpClick}
                    matchingEvent={matchingEvent}
                    closeEventDialog={closeEventDialog}
                />
            )}
        </div>
    )
}
