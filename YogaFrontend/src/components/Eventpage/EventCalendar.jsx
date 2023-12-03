import { useEffect, useState } from 'react'
import CalendarCard from './CalendarCard'

export default function EventCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [eventData, setEventData] = useState([])

    async function fetchEventsFromDatabase() {
        try {
            const response = await fetch('http://localhost:3000/events')
            const data = await response.json()
            setEventData(data)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }

    useEffect(() => {
        fetchEventsFromDatabase()
    }, [])

    function handleNextMonth() {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        )
    }

    function handlePrevMonth() {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        )
    }

    function handleCurrentMonth() {
        setCurrentDate(new Date())
    }

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate()

    const monthName = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
    }).format(currentDate)

    const daysArray = []
    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push(i)
    }

    const eventsfromdb = eventData.map((event) => {
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
            <div className="calendar-grid-container">{mappedDaysArray}</div>
        </div>
    )
}
