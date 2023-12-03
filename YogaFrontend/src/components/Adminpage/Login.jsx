import { useState } from 'react'

export default function Login({ checkLogin }) {
    Login.propTypes

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)

    function handleEnterKeyPress(event) {
        if (event.key === 'Enter') {
            // Call the handleLogin function when Enter key is pressed
            handleLogin()
        }
    }

    async function handleLogin() {
        try {
            const response = await fetch('http://localhost:3000/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })

            if (response.ok) {
                // Login successful
                checkLogin()
                setUsername('')
                setPassword('')
            } else {
                // Login failed
                setErrors('Invalid username or password')
                setUsername('')
                setPassword('')
            }
        } catch (error) {
            console.error('Error during login:', error)
            setErrors('An error occurred during login')
        }
    }

    return (
        <div className="login-container">
            <h2 className="login-container-title">Login</h2>
            <div className="input-group">
                <label className="login-label" htmlFor="username">
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    className="login-input"
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className="input-group">
                <label className="login-label" htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    className="login-input"
                    onChange={(event) => setPassword(event.target.value)}
                    onKeyDown={handleEnterKeyPress}
                />
            </div>
            <button className="login-button" onClick={handleLogin}>
                Login
            </button>
            {errors && <p className="login-error-text">Invalid login</p>}
        </div>
    )
}
