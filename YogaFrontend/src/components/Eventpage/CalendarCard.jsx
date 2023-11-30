import { useState, useEffect } from 'react'

export default function CalendarCard({ day, fullDate, events }) {
    CalendarCard.propTypes
    const [matchingEvent, setMatchingEvent] = useState(null)

    useEffect(() => {
        const formattedDate = fullDate.toDateString()
        const foundEvent = events.find((event) => event.start === formattedDate)

        if (foundEvent) {
            setMatchingEvent(foundEvent)
        } else {
            setMatchingEvent(null)
        }
    }, [fullDate, events])

    return (
        <div className="calendarCard-container">
            <p className="day-number">{day}</p>
            <div className="eventCards-container">
                {matchingEvent && (
                    <div className="eventCard">
                        <h3>{matchingEvent.title}</h3>
                        <p>{matchingEvent.description}</p>
                        <p>
                            {matchingEvent.startTime} until{' '}
                            {matchingEvent.endTime}
                        </p>
                        <div className="calendarCard-button-container">
                            <button>Sign up</button>
                            <button>See more</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
