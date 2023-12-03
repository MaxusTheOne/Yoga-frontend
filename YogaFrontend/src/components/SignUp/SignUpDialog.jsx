import { useState } from 'react'

export default function SignUpDialog({ handleCloseDialog }) {
    SignUpDialog.propTypes

    const [formData, setFormData] = useState({
        age: '',
        firstName: '',
        lastName: '',
        activityLevel: 'Low',
        phone: '',
        email: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const response = await fetch(
                'http://localhost:3000/users/userSignup',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            )

            if (response.ok) {
                const responseData = await response.json()
                console.log('Server response:', responseData)
            } else {
                console.error('Failed to submit the form:', response.status)
            }
        } catch (error) {
            console.error('Error submitting the form:', error)
        }
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
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="activityLevel">Activity Level:</label>
                    <br />
                    <select
                        id="activityLevel"
                        name="activityLevel"
                        value={formData.activityLevel}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Submit</button>
                </form>
            </dialog>
        </div>
    )
}
