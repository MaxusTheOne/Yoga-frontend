import Header from '../Homepage/Header'
import Footer from '../Homepage/Footer'
import EventCalendar from './EventCalendar'
import AnimatedPage from '../Homepage/AnimatedPage'

export default function Eventpage() {
    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="event-calendar-container">
                    <EventCalendar />
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
