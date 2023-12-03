import Header from '../Header'
import Footer from '../Footer'
import EventCalendar from './EventCalendar'
import AnimatedPage from '../AnimatedPage'

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
