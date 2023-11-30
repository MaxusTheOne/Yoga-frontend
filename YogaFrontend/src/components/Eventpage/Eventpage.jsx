import Header from '../Header'
import Footer from '../Footer'
import EventCalendar from './EventCalendar'

export default function Eventpage() {
    return (
        <>
            <Header />
            <div className="event-calendar-container">
                <div className="explanation">
                    Scroll on date for all events{' '}
                </div>
                <EventCalendar />
            </div>
            <Footer />
        </>
    )
}
