import { useState } from 'react'
import AnimatedPage from '../../Homepage/AnimatedPage'

// AddEventForm component for creating new events
export default function AddEventForm({ handleCloseDialog }) {
    AddEventForm.propTypes

    // State to manage form inputs
    const [title, setTitle] = useState('')
    const [startDate, setStartDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endDate, setEndDate] = useState('')
    const [endTime, setEndTime] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [linkUrl, setLinkUrl] = useState('')

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
            imageUrl,
            linkUrl,
        }

        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + '/events',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newEvent),
                }
            )

            if (response.ok) {
                console.log('Event added successfully')
            } else {
                console.error('Error adding event:', response.statusText)
            }
        } catch (error) {
            console.error('Error during fetch:', error)
        }

        // Clear the form fields and close the dialog
        setTitle('')
        setStartDate('')
        setStartTime('')
        setEndDate('')
        setEndTime('')
        setDescription('')
        setImageUrl('')
        setLinkUrl('')
        handleCloseDialog()
    }

    return (
        <>
            <AnimatedPage>
                <div className="eventDialog-overlay">
                    <dialog className="addEvent-dialog" open>
                        {/* Close button for the form */}
                        <div
                            onClick={handleCloseDialog}
                            className="addEventDialog-close-button"
                        >
                            X
                        </div>

                        {/* Form for adding a new event */}
                        <form
                            className="event-form"
                            onSubmit={handleFormSubmit}
                        >
                            <div className="addEvent-dialog-content">
                                {/* Input fields for event details */}
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

                                    <div className="addEvent-input-container">
                                        <label htmlFor="imageUrl">
                                            Image url:
                                        </label>
                                        <input
                                            type="url"
                                            id="imageUrl"
                                            value={imageUrl}
                                            onChange={(event) =>
                                                setImageUrl(event.target.value)
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
                                    </div>

                                    <div className="addEvent-input-container">
                                        <label htmlFor="link">Link url:</label>
                                        <input
                                            type="url"
                                            id="linkUrl"
                                            value={linkUrl}
                                            onChange={(event) =>
                                                setLinkUrl(event.target.value)
                                            }
                                        />
                                    </div>
                                </div>{' '}
                            </div>

                            {/* Submit button for adding the event */}
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
