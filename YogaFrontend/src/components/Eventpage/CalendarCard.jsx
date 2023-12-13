import { useState, useEffect } from 'react'
import EventCard from './EventCard'

// CalendarCard component representing a single day in the calendar
export default function CalendarCard({ day, fullDate, events }) {
    //Line below is to avoid error messages
    CalendarCard.propTypes

    // State to store events matching the current day
    const [matchingEvent, setMatchingEvent] = useState([])

    // Effect to update matchingEvent when fullDate or events change
    useEffect(() => {
        // Format the fullDate to a string for comparison with event dates
        const formattedDate = fullDate.toDateString()

        // Filter events that match the formatted date
        const foundEvent = events.filter(
            (event) => event.start === formattedDate
        )

        // Update matchingEvent state with the found events or an empty array if none
        if (foundEvent.length > 0) {
            setMatchingEvent(foundEvent)
        } else {
            setMatchingEvent([])
        }
    }, [fullDate, events]) // Dependency array: Run the effect when fullDate or events change

    return (
        <div className="calendarCard-container">
            {/* Displaying the day number */}
            <p className="day-number">{day}</p>
            <div className="eventCards-container">
                {/* Mapping through matching events and rendering EventCard components */}
                {matchingEvent.map((event) => (
                    <EventCard key={event.id} matchingEvent={event} />
                ))}
            </div>
        </div>
    )
}
