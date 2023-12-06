import { NavLink } from 'react-router-dom'
import AnimatedPage from '../../Homepage/AnimatedPage'
import Footer from '../../Homepage/Footer'
import Header from '../../Homepage/Header'
import { useEffect, useState } from 'react'
import EventOverviewCard from './EventOverviewCard'

export default function EventSignups() {
    const [eventData, setEventData] = useState([])
    const [eventSignups, setEventSignups] = useState([])
    const [userData, setUserData] = useState([])

    async function fetchUsersFromDatabase() {
        try {
            const response = await fetch('http://localhost:3000/users')
            const data = await response.json()
            setUserData(data)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }

    async function fetchEventsFromDatabase() {
        try {
            const response = await fetch('http://localhost:3000/events')
            const data = await response.json()
            setEventData(data)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }

    async function fetchEventSignups() {
        try {
            const response = await fetch('http://localhost:3000/events/signups')
            const data = await response.json()

            if (response.ok) {
                setEventSignups(data)
            } else {
                console.error('Error fetching signups:', data.error)
            }
        } catch (error) {
            console.error('Error during fetch:', error)
        }
    }

    useEffect(() => {
        fetchEventSignups()
    }, [])

    useEffect(() => {
        fetchEventsFromDatabase()
    }, [])

    useEffect(() => {
        fetchUsersFromDatabase()
    }, [])

    const events = eventData.map((event) => (
        <EventOverviewCard
            key={event.id}
            title={event.title}
            event={event}
            eventSignups={eventSignups}
            userData={userData}
        />
    ))

    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="event-signups-container">
                    <h1 className="event-signups-title">Event sign ups</h1>
                    <NavLink to="/adminMenu">
                        <li className="event-signups-container-li">
                            &#8594;To menu &#8592;
                        </li>
                    </NavLink>
                    <div className="eventOverview-cards-container">
                        {events}
                    </div>
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
