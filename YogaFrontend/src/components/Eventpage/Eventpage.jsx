import Header from '../Header'
import Footer from '../Footer'
import EventCalendar from './EventCalendar'

export default function Eventpage() {
    return (
        <>
            <Header />
            <div className="event-calendar-container">
                <EventCalendar />
            </div>
            <Footer />
        </>
    )
}
