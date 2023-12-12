import { useEffect, useState } from 'react'
import CalendarCard from './CalendarCard'

export default function EventCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [eventData, setEventData] = useState([])

    async function fetchEventsFromDatabase() {
        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + '/events'
            )
            const data = await response.json()
            setEventData(data)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }

    useEffect(() => {
        fetchEventsFromDatabase()
    }, [])

    // Functions to handle navigation to next, previous, and current months

    function handleNextMonth() {
        // Updating the current date to the first day of the next month
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        )
    }

    function handlePrevMonth() {
        // Updating the current date to the first day of the previous month
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        )
    }

    function handleCurrentMonth() {
        // Resetting the current date to the current month
        setCurrentDate(new Date())
    }

    // Calculating the number of days in the current month
    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate()

    // Formatting the month name using the Intl.DateTimeFormat API
    const monthName = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
    }).format(currentDate)

    // Generating an array of days in the current month
    const daysArray = []
    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push(i)
    }

    // Formatting events data from the backend for display
    const eventsfromdb = eventData.map((event) => {
        // Formatting start and end dates and times
        const formattedStartDate = new Date(event.start).toDateString()
        const formattedEndDate = new Date(event.end).toDateString()
        const formattedStartTime = new Date(event.start).toLocaleTimeString(
            [],
            {
                hour: '2-digit',
                minute: '2-digit',
            }
        )
        const formattedEndTime = new Date(event.end).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        return {
            ...event,
            start: formattedStartDate,
            end: formattedEndDate,
            startTime: formattedStartTime,
            endTime: formattedEndTime,
        }
    })

    // Mapping the daysArray to CalendarCard components for display
    const mappedDaysArray = daysArray.map((day) => (
        <CalendarCard
            key={day}
            day={day}
            fullDate={
                new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
            }
            events={eventsfromdb}
        />
    ))

    return (
        <div className="calendar-container">
            <h1 className="monthName-container">{monthName}</h1>
            <div className="month-buttons-container">
                <button className="month-button" onClick={handlePrevMonth}>
                    Previous Month
                </button>
                <button className="month-button" onClick={handleCurrentMonth}>
                    Current Month
                </button>
                <button className="month-button" onClick={handleNextMonth}>
                    Next Month
                </button>
            </div>
            {/* Container for displaying the CalendarCard components */}
            <div className="calendar-grid-container">{mappedDaysArray}</div>
        </div>
    )
}
