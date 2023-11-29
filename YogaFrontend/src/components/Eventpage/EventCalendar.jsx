import { useState } from 'react'
import CalendarCard from './CalendarCard'

export default function EventCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date())

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
        month: 'long',
    }).format(currentDate)

    const daysArray = []
    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push(i)
    }

    const mappedDaysArray = daysArray.map((day) => (
        <CalendarCard key={day} day={day} />
    ))

    return (
        <div className="calendar-container">
            <h1 className="monthName-container">{monthName}</h1>
            <div className="month-buttons-container">
                <button onClick={handlePrevMonth}>Previous Month</button>
                <button onClick={handleCurrentMonth}>Current Month</button>
                <button onClick={handleNextMonth}>Next Month</button>
            </div>
            <div className="calendar-grid-container">{mappedDaysArray}</div>
        </div>
    )
}
