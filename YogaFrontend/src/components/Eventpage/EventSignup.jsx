import { useState } from 'react'
import AnimatedPage from '../AnimatedPage'

export default function EventSignUp({ matchingEvent }) {
    EventSignUp.propTypes

    const [email, setEmail] = useState('')
    const [noMatch, setNoMatch] = useState(false)
    const [signedUp, setSignedUp] = useState(false)

    async function associateUserWithEvent(userSignedUp) {
        const data = userSignedUp

        console.log('this is my object:', data)

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

            if (response.ok) {
                console.log('User associated with event successfully')
                setSignedUp(true)
                setEmail('')
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
                setNoMatch(true)
                setEmail('')
                return null
            }
        } catch (error) {
            console.error('Error during fetch:', error)

            return null
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const user = await getUserIdByEmail(email)
        const userSignedUp = {
            eventId: matchingEvent.id,
            userId: user,
        }

        associateUserWithEvent(userSignedUp)
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
                    {signedUp && (
                        <p className="event-signup-success">
                            Sign up successful, you can close this window now.
                        </p>
                    )}
                </form>
            </AnimatedPage>
        </>
    )
}
