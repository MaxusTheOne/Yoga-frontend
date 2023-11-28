import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import DatePicker from 'react-datepicker'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import enUS from 'date-fns/locale/en-US'
import { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import '/Users/dajac/Desktop/Datamatiker/Semester 2/Eksamen/kode/Yoga-frontend/YogaFrontend/src/homepage.css'
import { da } from 'date-fns/locale'

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

//This is only testing data
//Months start at 0 so that would be january
//format goes new Date(year, month, day, hour, minutes)
const events = [
    {
        title: 'Astanga yoga intro',
        allDay: false,
        start: new Date(2023, 10, 23, 18, 30),
        end: new Date(2023, 10, 23, 20, 0),
        description: 'other',
        data: { type: 'signup' },
    },
    {
        title: 'Hot yoga retreat',
        allDay: true,
        start: new Date(2023, 10, 21),
        end: new Date(2023, 10, 22),
        description: 'all day event',
        data: { type: 'signup' },
    },
    {
        title: 'Shavasana yoga intro',
        allDay: false,
        start: new Date(2023, 10, 26, 12, 30),
        end: new Date(2023, 10, 26, 13, 30),
        description: 'more other',
        data: { type: 'signup' },
    },
]

// const EventComponent = ({ event }) => (
//     <div>
//         {event.title}
//         {event.description && <p>{event.description}</p>}
//     </div>
// )

//This is the actual component starting here and going down

export default function EventCalendar() {
    // New state to store events fetched from the database
    const [dbEvents, setDbEvents] = useState([])

    // Function to fetch events from the database
    async function fetchEventsFromDatabase() {
        try {
            const response = await fetch('http://localhost:3000/events')
            const data = await response.json()
            setDbEvents(data)
        } catch (error) {
            console.error('Error fetching events:', error)
        }
    }

    //controls the state for the dialog for adding an event
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    //Sets the state of a new event thru the datepicker component
    const [newEvent, setNewEvent] = useState({
        title: '',
        start: '',
        end: '',
    })

    // useEffect to fetch events when the component mounts
    useEffect(() => {
        fetchEventsFromDatabase()
    }, [newEvent])

    //is used to update all events with the newEvent to show on the calendar
    const [allEvents, setAllEvents] = useState(dbEvents)

    //used for checking the input datepicker for empty values
    const [error, setError] = useState('')

    //this function is called when the add event button is clicked and it calls the set function in allEvents
    function handleAddEvent() {
        // Check if required fields are filled
        if (!newEvent.title || !newEvent.start || !newEvent.end) {
            setError('Please fill in all required fields.')
            return
        }

        // Make a POST request to add the new event on the server
        fetch('http://localhost:3000/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEvent),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data) // Log the response from the server
            })
            .catch((error) => {
                console.error('Error adding event:', error)
            })

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

        //closes the dialog after event is added
        setIsDialogOpen(false)
    }

    //this function handles the opening of the add event dialog
    function handleOpenDialog() {
        setIsDialogOpen(true)
    }

    //this function handles the opening of the add event dialog
    function handleCloseDialog() {
        setIsDialogOpen(false)
    }

    return (
        <>
            <button onClick={handleOpenDialog}>Add new event</button>
            {isDialogOpen && (
                <dialog className="add-new-event-dialog" open>
                    <button onClick={handleCloseDialog}>X</button>
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
                            onChange={(end) =>
                                setNewEvent({ ...newEvent, end })
                            }
                            showTimeSelect
                            dateFormat="dd/MM/yyyy h:mm aa"
                            isClearable
                        />
                        <textarea
                            placeholder="Add description"
                            style={{
                                marginTop: '10px',
                                width: '100%',
                                resize: 'vertical',
                            }}
                            value={newEvent.description}
                            onChange={(event) =>
                                setNewEvent({
                                    ...newEvent,
                                    description: event.target.value,
                                })
                            }
                        />
                        <button
                            style={{ marginTop: '10px' }}
                            onClick={handleAddEvent}
                        >
                            Add event
                        </button>
                    </div>
                </dialog>
            )}

            <Calendar
                views={['month', 'week']}
                defaultView={'month'}
                className="event-calendar"
                localizer={localizer}
                events={dbEvents}
                startAccessor="start"
                endAccessor="end"
                // components={{
                //     event: EventComponent,
                // }}
                style={{ height: 500, margin: '50px' }}
            />
        </>
    )
}
