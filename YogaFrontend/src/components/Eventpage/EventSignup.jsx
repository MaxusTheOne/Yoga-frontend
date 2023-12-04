import { useState } from 'react'
import AnimatedPage from '../AnimatedPage'

export default function EventSignUp({ closeEventDialog, matchingEvent }) {
    EventSignUp.propTypes

    const [email, setEmail] = useState('')
    const [noMatch, setNoMatch] = useState(false)

    async function associateUserWithEvent(eventId, userId) {
        const data = { eventId, userId }

        console.log(data)

        try {
            const response = await fetch(
                'http://localhost:3000/users/eventSignup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            )

            const responseData = await response.json()

            if (response.ok) {
                console.log(
                    'User associated with event successfully:',
                    responseData
                )
            } else {
                console.error(
                    'Error associating user with event:',
                    responseData.error
                )
            }
        } catch (error) {
            console.error('Error during fetch:', error)
        }
    }

    async function getUserIdByEmail(email) {
        try {
            const response = await fetch(
                `http://localhost:3000/users/userIdByEmail?email=${email}`
            )
            const data = await response.json()

            if (response.ok) {
                return data.userId
            } else {
                console.error('Error retrieving user ID:', data.error)
                return null
            }
        } catch (error) {
            console.error('Error during fetch:', error)
            setNoMatch(true)
            return null
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const user = await getUserIdByEmail(email)

        const userId = user
        const eventId = matchingEvent.id

        associateUserWithEvent(eventId, userId)
    }

    return (
        <>
            <AnimatedPage>
                <h1 className="event-signup-title">
                    Sign up: <br></br>- {matchingEvent.title} -
                </h1>
                <form onSubmit={handleSubmit}>
                    <label className="event-signup-input-label" htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onClick={() => setNoMatch(false)}
                        required
                    />
                    <button
                        className="eventDialog-sign-up-button"
                        type="submit"
                    >
                        Submit
                    </button>
                    {noMatch && (
                        <p className="event-signup-error">
                            No user found, sign up as user or type correct
                            email.
                        </p>
                    )}
                </form>
            </AnimatedPage>
        </>
    )
}
