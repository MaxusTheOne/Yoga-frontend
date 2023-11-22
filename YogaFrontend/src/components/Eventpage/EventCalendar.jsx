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
import '/Users/dajac/Desktop/Datamatiker/Semester 2/Eksamen/kode/Yoga-frontend/YogaFrontend/src/homepage.css'

const components = {
    event: (props) => {
        console.log(props)
        const eventType = props?.event?.data?.type
        switch (eventType) {
            case 'signup':
                return (
                    <div>
                        {props} <p>asdas</p>
                    </div>
                )
            default:
                return <p>poopy</p>
        }
    },
}

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
        data: { type: 'signup' },
    },
    {
        title: 'Hot yoga retreat',
        allDay: true,
        start: new Date(2023, 10, 21),
        end: new Date(2023, 10, 22),
        desription: 'all day event',
        data: { type: 'signup' },
    },
    {
        title: 'Shavasana yoga intro',
        allDay: false,
        start: new Date(2023, 10, 26, 12, 30),
        end: new Date(2023, 10, 26, 13, 30),
        data: { type: 'signup' },
    },
]

export default function EventCalendar() {
    //Sets the state of a new event thru the datepicker component
    const [newEvent, setNewEvent] = useState({
        title: '',
        allDay: '',
        start: '',
        end: '',
    })

    //is used to update all events with the newEvent to show on the calendar
    const [allEvents, setAllEvents] = useState(events)

    //used for checking the input datepicker for empty values
    const [error, setError] = useState('')

    //this function is called when the add event button is clicked and it calls the set function in allEvents
    function handleAddEvent() {
        // Check if required fields are filled
        if (!newEvent.title || !newEvent.start || !newEvent.end) {
            setError('Please fill in all required fields.')
            return
        }

        // Reset error
        setError('')

        setAllEvents([...allEvents, newEvent])

        //resets the input fields
        setNewEvent({
            title: '',
            allDay: '',
            start: '',
            end: '',
        })
    }

    return (
        <>
            <h2>Add new event</h2>
            <dialog className="add-new-event-dialog" open>
                <div>
                    {/* The below is to validate some input and send and error to the user if there is no input */}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <input
                        required
                        type="text"
                        placeholder="Add title"
                        style={{ width: '20%', marginRight: '10px' }}
                        value={newEvent.title}
                        onChange={(event) =>
                            setNewEvent({
                                ...newEvent,
                                title: event.target.value,
                            })
                        }
                    />
                    <DatePicker
                        ClassName="datePicker"
                        required
                        placeholderText="Start Date"
                        style={{ marginRight: '10px' }}
                        selected={newEvent.start}
                        onChange={(start) =>
                            setNewEvent({ ...newEvent, start })
                        }
                        showTimeSelect
                        dateFormat="dd/MM/yyyy h:mm aa"
                        isClearable
                    />
                    <DatePicker
                        required
                        placeholderText="End Date"
                        style={{ marginRight: '10px' }}
                        selected={newEvent.end}
                        onChange={(end) => setNewEvent({ ...newEvent, end })}
                        showTimeSelect
                        dateFormat="dd/MM/yyyy h:mm aa"
                        isClearable
                    />
                    <button
                        style={{ marginTop: '10px' }}
                        onClick={handleAddEvent}
                    >
                        Add event
                    </button>
                </div>
            </dialog>

            <Calendar
                views={['month', 'week', 'day']}
                defaultView={'week'}
                className="event-calendar"
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: '50px' }}
                components={components}
            />
        </>
    )
}
