import { NavLink } from 'react-router-dom'
import AnimatedPage from '../../Homepage/AnimatedPage'
import Footer from '../../Homepage/Footer'
import Header from '../../Homepage/Header'
import { useEffect, useState } from 'react'
import EventOverviewCard from './EventOverviewCard'

// EventSignups component for displaying an overview of events and their signups
export default function EventSignups() {
    // State to store event data, event signups, and user data
    const [eventData, setEventData] = useState([])
    const [eventSignups, setEventSignups] = useState([])
    const [userData, setUserData] = useState([])

    async function deleteEvent(event) {
        // Extract the ID of the event to be deleted
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

            // Check if the deletion was successful
            if (!response.ok) {
                console.log(`HTTP error! Status: ${response.status}`)
            }

            // Update page if successfull
            fetchEventsFromDatabase()
            console.log('Event deleted successfully')
        } catch (error) {
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
            console.log('Error fetching users:', error)
        }
    }

    async function fetchEventsFromDatabase() {
        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + '/events'
            )
            const data = await response.json()

            // Sort events by start date in descending order
            const sortedEvents = data.sort(
                (a, b) => new Date(b.start) - new Date(a.start)
            )

            // Format event data for display
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

            // Update state with formatted event data
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

    // useEffect hook to fetch event signups when the component mounts
    useEffect(() => {
        fetchEventSignups()
    }, [])

    // useEffect hook to fetch events when the component mounts
    useEffect(() => {
        fetchEventsFromDatabase()
    }, [])

    // useEffect hook to fetch users when the component mounts
    useEffect(() => {
        fetchUsersFromDatabase()
    }, [])

    // Mapping events to EventOverviewCard components
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
                    {/* Container for displaying EventOverviewCard components */}
                    <div className="eventOverview-cards-container">
                        {events}
                    </div>
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
