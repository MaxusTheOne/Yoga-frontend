import { useState } from 'react'
import AnimatedPage from '../Homepage/AnimatedPage'

export default function EventSignUp({ matchingEvent }) {
    EventSignUp.propTypes

    const [email, setEmail] = useState('')
    const [signedUp, setSignedUp] = useState(false)

    //State to check if the email used for sign up is a member email
    const [noMatch, setNoMatch] = useState(false)

    async function associateUserWithEvent(userSignedUp) {
        const data = userSignedUp

        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + '/users/eventSignup',
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
                import.meta.env.VITE_BACKEND_ENDPOINT +
                    `/users/userIdByEmail?email=${email}`
            )
            const data = await response.json()

            if (response.ok) {
                return data.userId
            } else {
                console.error('Error retrieving user ID:', data.error)

                //If no match is found the state is set to true and an error message if displayed for the user
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

        //Object for the backend to input in our junction table that associates users with events
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
                    {/* Displaying an error message if no user is found */}
                    {noMatch && (
                        <p className="event-signup-error">
                            No user found, sign up as a user or type the correct
                            email.
                        </p>
                    )}
                    {/* Displaying a success message if the sign-up is successful */}
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
