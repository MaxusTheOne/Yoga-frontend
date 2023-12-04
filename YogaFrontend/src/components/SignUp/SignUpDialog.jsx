import { useState } from 'react'
import AnimatedPage from '../AnimatedPage'

export default function SignUpDialog({ handleCloseDialog }) {
    SignUpDialog.propTypes

    const [age, setAge] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [activityLevel, setActivityLevel] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [activityLevel, setActivityLevel] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        // Create the user object
        const newUser = {
            age,
            firstName,
            lastName,
            activityLevel,
            phone,
            email,
        }

        try {
            // Make a fetch request to your server endpoint
        // Create the user object
        const newUser = {
            age,
            firstName,
            lastName,
            activityLevel,
            phone,
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
                    body: JSON.stringify(newUser),
                }
            )

            if (response.ok) {
                console.log('User added successfully')
                console.log('User added successfully')
            } else {
                console.error('Failed to submit the form:', response.status)
            }
        } catch (error) {
            console.error('Error during fetch:', error)
            // Handle other errors as needed
        }

        // Clear the form fieldss
        setAge('')
        setFirstName('')
        setLastName('')
        setActivityLevel('')
        setPhone('')
        setEmail('')

        handleCloseDialog()
    }

    return (
        <div className="dialog">
            <dialog className="signup-dialog" open>
                <button
                    onClick={handleCloseDialog}
                    className="close-dialog-button"
                >
                    X
                </button>
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                        required
                    />

                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        required
                    />

                    <label htmlFor="activityLevel">Activity Level:</label>
                    <br />
                    <select
                        id="activityLevel"
                        name="activityLevel"
                        value={activityLevel}
                        onChange={(event) =>
                            setActivityLevel(event.target.value)
                        }
                        required
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <br />
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[0-9]{10}"
                        placeholder="Enter a 10-digit phone number without spaces or dashes."
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
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

                        <button type="submit">Submit</button>
                    </form>
                </dialog>
            </div>
        </AnimatedPage>
    )
}
