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

    async function deleteEvent(event) {
        const idToDelete = event.id

        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + `/events/${idToDelete}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            if (!response.ok) {
                console.log(`HTTP error! Status: ${response.status}`)
            }

            // Handle success, if needed
            fetchEventsFromDatabase()
            console.log('Event deleted successfully')
        } catch (error) {
            // Handle errors
            console.error('Error deleting event:', error.message)
        }
    }

    async function fetchUsersFromDatabase() {
        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + '/users'
            )
            const data = await response.json()
            setUserData(data)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }

    async function fetchEventsFromDatabase() {
        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + '/events'
            )
            const data = await response.json()
            const sortedEvents = data.sort(
                (a, b) => new Date(b.start) - new Date(a.start)
            )
            const formattedEvents = sortedEvents.map((event) => {
                const formattedStartDate = new Date(event.start).toDateString()
                const formattedEndDate = new Date(event.end).toDateString()
                const formattedStartTime = new Date(
                    event.start
                ).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                })
                const formattedEndTime = new Date(event.end).toLocaleTimeString(
                    [],
                    {
                        hour: '2-digit',
                        minute: '2-digit',
                    }
                )

                return {
                    ...event,
                    start: formattedStartDate,
                    end: formattedEndDate,
                    startTime: formattedStartTime,
                    endTime: formattedEndTime,
                }
            })
            setEventData(formattedEvents)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }

    async function fetchEventSignups() {
        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + '/events/signups'
            )
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
            deleteEvent={deleteEvent}
        />
    ))

    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="event-signups-container">
                    <h1 className="event-signups-title">Events overview</h1>
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
