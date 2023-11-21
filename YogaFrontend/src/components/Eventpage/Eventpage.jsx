import Header from '../Header'
import EventCalendar from './EventCalendar'

export default function Eventpage() {
    return (
        <>
            <Header />
            <div className="event-calendar-container">
                <h1>Upcoming events</h1>
                <EventCalendar />
            </div>
        </>
    )
}
