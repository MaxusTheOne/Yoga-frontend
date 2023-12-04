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

    return (
        <div className="eventCard">
            <h3 onClick={openEventDialog} className="eventCard-title">
                {matchingEvent.title}
            </h3>
            <div className="calendarCard-button-container"></div>
            {dialogStatus && (
                <EventDialog
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
