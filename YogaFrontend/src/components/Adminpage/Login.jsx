import { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        console.log('Logging in with:', { username, password })
        setUsername('')
        setPassword('')
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
                />
            </div>
            <button className="login-button" onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
