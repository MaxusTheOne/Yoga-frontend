import { useState } from 'react'
import AnimatedPage from '../AnimatedPage'

export default function SignUpForm({ onClose, onSignUp }) {
    SignUpForm.propTypes

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        // Validate input if needed
        // Call the onSignUp function with the entered data
        onSignUp({ name, email })
        // Close the form
        onClose()
    }

    return (
        <>
            <AnimatedPage>
                <h1 className="event-signup-title">Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <label className="event-signup-input-label" htmlFor="name">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                    <label className="event-signup-input-label" htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <button
                        className="eventDialog-sign-up-button"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </AnimatedPage>
        </>
    )
}
