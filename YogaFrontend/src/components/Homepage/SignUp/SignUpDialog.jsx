import { useState } from 'react'
import AnimatedPage from '../AnimatedPage'

export default function SignUpDialog({ handleCloseDialog }) {
    SignUpDialog.propTypes

    const [userAdded, setUserAdded] = useState(false)
    const [userNotAdded, setUserNotAdded] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        // Create the user object
        const newUser = {
            firstName,
            lastName,
            email,
        }

        try {
            // Make a fetch request to your server endpoint
            const response = await fetch(
                'http://localhost:3000/users/userSignup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                }
            )

            if (response.ok) {
                console.log('User added successfully')
                setUserAdded(true)
            } else {
                setUserNotAdded(true)
                console.error('Failed to submit the form:', response.status)
            }
        } catch (error) {
            console.error('Error during fetch:', error)
            // Handle other errors as needed
        }

        // Clear the form fieldss
        setFirstName('')
        setLastName('')
        setEmail('')
    }

    return (
        <AnimatedPage>
            <div className="signup-dialog-overlay">
                <dialog className="signup-dialog" open>
                    <div className="close-dialog-button">
                        <p onClick={handleCloseDialog}>X</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(event) =>
                                setFirstName(event.target.value)
                            }
                            required
                        />

                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={(event) =>
                                setLastName(event.target.value)
                            }
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />

                        <button className="logout-button" type="submit">
                            Submit
                        </button>
                        {userAdded && (
                            <p className="event-signup-success">
                                Sign up sucucessful, you can close this window
                            </p>
                        )}
                        {userNotAdded && (
                            <p className="event-signup-error">
                                An error occurred please try again
                            </p>
                        )}
                    </form>
                </dialog>
            </div>
        </AnimatedPage>
    )
}
