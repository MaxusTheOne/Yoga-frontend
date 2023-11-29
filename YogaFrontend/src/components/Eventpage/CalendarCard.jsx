export default function CalendarCard({ day, event }) {
    CalendarCard.propTypes
    return (
        <div className="calendarCard-container">
            <p className="day-number">{day}</p>
            <div className="eventCards-container">{event}</div>
        </div>
    )
}
