import { NavLink } from 'react-router-dom'

export default function Practice() {
    return (
        <div className="practice-grid">
            <div className="practice-grid-items">
                <NavLink to="/faceyoga">
                    <img src="face.png" className="practice-grid-item" />
                </NavLink>
                <NavLink to="/online">
                    <img src="online.png" className="practice-grid-item" />
                </NavLink>
                <NavLink to="events">
                    <img src="weekly.png" className="practice-grid-item" />
                </NavLink>
                <NavLink to="privatesessions">
                    <img src="private.png" className="practice-grid-item" />
                </NavLink>
            </div>
        </div>
    )
}
