import { useState } from 'react'
import AnimatedPage from '../AnimatedPage'

export default function AddEventForm({ handleCloseDialog }) {
    AddEventForm.propTypes

    const [title, setTitle] = useState('')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')
    const [description, setDescription] = useState('')

    async function handleFormSubmit(event) {
        event.preventDefault()

        // Combine date and time for start and end
        const startDateTime = `${startDate} ${startTime}:00`
        const endDateTime = `${endDate} ${endTime}:00`

        // Create the event object
        const newEvent = {
            title,
            description,
            start: startDateTime,
            end: endDateTime,
        }

        try {
            // Make a fetch request to your server endpoint
            const response = await fetch('http://localhost:3000/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEvent),
            })

            if (response.ok) {
                console.log('Event added successfully')
                // Optionally, you can handle success (event.g., show a message)
            } else {
                console.error('Error adding event:', response.statusText)
                // Optionally, you can handle errors (event.g., show an error message)
            }
        } catch (error) {
            console.error('Error during fetch:', error)
            // Handle other errors as needed
        }

        // Clear the form fields
        setTitle('')
        setStartDate('')
        setStartTime('')
        setEndDate('')
        setEndTime('')
        setDescription('')

        handleCloseDialog()
    }

    return (
        <>
            <AnimatedPage>
                <div className="eventDialog-overlay">
                    <dialog className="addEvent-dialog" open>
                        <div
                            onClick={handleCloseDialog}
                            className="addEventDialog-close-button"
                        >
                            X
                        </div>

                        <form
                            className="event-form"
                            onSubmit={handleFormSubmit}
                            // onSubmit={check}
                        >
                            <div className="addEvent-dialog-content">
                                <div className="input-column">
                                    <div className="addEvent-input-container">
                                        <label htmlFor="title">Title:</label>
                                        <input
                                            type="text"
                                            id="title"
                                            value={title}
                                            onChange={(event) =>
                                                setTitle(event.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="addEvent-input-container">
                                        <label htmlFor="description">
                                            Description:
                                        </label>
                                        <textarea
                                            rows="15"
                                            cols="23"
                                            id="description"
                                            value={description}
                                            onChange={(event) =>
                                                setDescription(
                                                    event.target.value
                                                )
                                            }
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="input-column">
                                    <div className="addEvent-input-container">
                                        <label htmlFor="startDate">
                                            Start Date:
                                        </label>
                                        <input
                                            type="date"
                                            id="startDate"
                                            value={startDate}
                                            onChange={(event) =>
                                                setStartDate(event.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="addEvent-input-container">
                                        <label htmlFor="endDate">
                                            End Date:
                                        </label>
                                        <input
                                            type="date"
                                            id="endDate"
                                            value={endDate}
                                            onChange={(event) =>
                                                setEndDate(event.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="input-column">
                                    <div className="addEvent-input-container">
                                        <label htmlFor="startTime">
                                            Start Time:
                                        </label>
                                        <input
                                            type="time"
                                            id="startTime"
                                            value={startTime}
                                            onChange={(event) =>
                                                setStartTime(event.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="addEvent-input-container">
                                        <label htmlFor="endTime">
                                            End Time:
                                        </label>
                                        <input
                                            type="time"
                                            id="endTime"
                                            value={endTime}
                                            onChange={(event) =>
                                                setEndTime(event.target.value)
                                            }
                                            required
                                        />
                                        <div />
                                    </div>
                                </div>
                            </div>
                            <div className="addEvent-submit-button">
                                <button className="logout-button" type="submit">
                                    Add Event
                                </button>
                            </div>
                        </form>
                    </dialog>
                </div>
            </AnimatedPage>
        </>
    )
}
