import { useState } from 'react'
import SignupsDialog from './SignupsDialog'

// EventOverviewCard component for displaying event signup details
export default function EventOverviewCard({
    title,
    event,
    eventSignups,
    userData,
    deleteEvent,
}) {
    //This line to avoid error messages
    EventOverviewCard.propTypes

    // State to manage the visibility of the signups dialog and sign up objects to be displayed
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])

    function showEventSignUps() {
        // Array to store signups for the event
        const signups = []

        // Filter event signups matching the current event ID
        eventSignups.forEach((item) => {
            if (item['event_id'] === event.id) {
                signups.push(item)
            }
        })

        // Process signups and match with user data
        if (signups.length === 0) {
            console.log('No one signed up for this event')
        } else {
            signups.forEach((item) => {
                userData.forEach((user) => {
                    if (user.id === item['user_id']) {
                        setData((prevData) => [...prevData, user])
                    }
                })
            })
        }
    }

    // Mapping user data for rendering
    const list = data.map((item) => {
        return item
    })

    return (
        <>
            <div className="eventOverview-card-container">
                <div
                    className="eventOverview-card-text"
                    // Click event to show signups and set visibility to true
                    onClick={() => {
                        showEventSignUps()
                        setShow(true)
                    }}
                >
                    <div className="eventOverview-card-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="eventOverview-card-start">
                        start: {event.start} {event.startTime}
                    </div>
                    <div className="eventOverview-card-end">
                        end: {event.end} {event.endTime}
                    </div>
                </div>{' '}
                <div className="delete-event-button-container">
                    <button
                        className="delete-event-button"
                        // Click event to delete the current event
                        onClick={() => deleteEvent(event)}
                    >
                        Delete event
                    </button>
                </div>
            </div>

            {/* Conditionally render the SignupsDialog component when show state is true */}
            {show && (
                <SignupsDialog event={event} list={list} setShow={setShow} />
            )}
        </>
    )
}
