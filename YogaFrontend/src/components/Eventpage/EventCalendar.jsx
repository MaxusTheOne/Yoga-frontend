import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import DatePicker from 'react-datepicker'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import enUS from 'date-fns/locale/en-US'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

//format of the dates is in US format
const locales = {
    'en-US': enUS,
}

//customizing the behavior of the functionalities in the calendar
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

//Months start at 0 so that would be january
//format goes new Date(year, month, day, hour, minutes)
const events = [
    {
        title: 'Astanga yoga intro',
        allDay: false,
        start: new Date(2023, 10, 23, 18, 30),
        end: new Date(2023, 10, 23, 20, 0),
    },
    {
        title: 'Hot yoga retreat',
        allDay: true,
        start: new Date(2023, 10, 21),
        end: new Date(2023, 10, 22),
    },
    {
        title: 'Shavasana yoga intro',
        allDay: false,
        start: new Date(2023, 10, 26, 12, 30),
        end: new Date(2023, 10, 26, 13, 30),
    },
]

export default function EventCalendar() {
    const [newEvent, setNewEvent] = useState({
        title: '',
        startDate: '',
        endDate: '',
    })
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <>
            <h2>Add new event</h2>
            <div>
                <input
                    type="text"
                    placeholder="Add title"
                    style={{ width: '20%', marginRight: '10px' }}
                    value={newEvent.title}
                    onChange={(event) =>
                        setNewEvent({ ...newEvent, title: event.target.value })
                    }
                />
                <DatePicker
                    placeholderText="Start Date"
                    style={{ marginRight: '10px' }}
                    selected={newEvent.startDate}
                    onChange={(startDate) =>
                        setNewEvent({ ...newEvent, startDate })
                    }
                />
                <DatePicker
                    placeholderText="End Date"
                    style={{ marginRight: '10px' }}
                    selected={newEvent.endDate}
                    onChange={(endDate) =>
                        setNewEvent({ ...newEvent, endDate })
                    }
                />
                <button style={{ marginTop: '10px' }} onClick={handleAddEvent}>
                    Add event
                </button>
            </div>
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: '50px' }}
            />
        </>
    )
}
