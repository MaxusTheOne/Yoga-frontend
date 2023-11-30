import { useState } from 'react'
import EventDialog from './EventDialog'

export default function EventCard({ matchingEvent }) {
    EventCard.propTypes

    const [dialogStatus, setDialogStatus] = useState(false)

    function openEventDialog() {
        setDialogStatus(true)
    }

    function closeEventDialog() {
        setDialogStatus(false)
    }

    function showMatchingEvent() {
        console.log(matchingEvent)
    }

    return (
        <div onClick={showMatchingEvent} className="eventCard">
            <h3 onClick={openEventDialog} className="eventCard-title">
                {matchingEvent.title}
            </h3>
            <div className="calendarCard-button-container"></div>
            {dialogStatus && (
                <EventDialog
                    matchingEvent={matchingEvent}
                    closeEventDialog={closeEventDialog}
                />
            )}
        </div>
    )
}
