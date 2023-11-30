import { useState, useEffect } from 'react'
import EventCard from './EventCard'

export default function CalendarCard({ day, fullDate, events }) {
    CalendarCard.propTypes
    const [matchingEvent, setMatchingEvent] = useState([])

    useEffect(() => {
        const formattedDate = fullDate.toDateString()
        const foundEvent = events.filter(
            (event) => event.start === formattedDate
        )

        if (foundEvent) {
            setMatchingEvent(foundEvent)
        } else {
            setMatchingEvent([])
        }
    }, [fullDate, events])

    return (
        <div className="calendarCard-container">
            <p className="day-number">{day}</p>
            <div className="eventCards-container">
                {matchingEvent.map((event) => (
                    <EventCard key={event.id} matchingEvent={event} />
                ))}
            </div>
        </div>
    )
}
