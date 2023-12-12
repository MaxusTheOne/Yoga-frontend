import { useState } from 'react'
import SignupsDialog from './SignupsDialog'

export default function EventOverviewCard({
    title,
    event,
    eventSignups,
    userData,
    deleteEvent,
}) {
    EventOverviewCard.propTypes

    const [show, setShow] = useState(false)
    const [data, setData] = useState([])

    function showEventSignUps() {
        const signups = []

        eventSignups.forEach((item) => {
            if (item['event_id'] === event.id) {
                signups.push(item)
            }
        })

        if (signups.length === 0) {
            console.log('no one signed up here')
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

    const list = data.map((item) => {
        return item
    })

    return (
        <>
            <div className="eventOverview-card-container">
                <div
                    className="eventOverview-card-text"
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
                        onClick={() => deleteEvent(event)}
                    >
                        Delete event
                    </button>
                </div>
            </div>

            {show && (
                <SignupsDialog event={event} list={list} setShow={setShow} />
            )}
        </>
    )
}
