import { NavLink } from 'react-router-dom'

export default function Practice() {
    return (
        <div className="practice-grid">
            <NavLink to="/faceyoga">
                <img
                    src="face.png"
                    className="practice-grid-item"
                    style={{
                        height: 'auto',
                        width: '400px',
                        borderRadius: '20px',
                    }}
                />
            </NavLink>
            <NavLink to="/online">
                <img
                    src="online.png"
                    className="practice-grid-item"
                    style={{
                        height: 'auto',
                        width: '400px',
                        borderRadius: '20px',
                    }}
                />
            </NavLink>
            <NavLink to="weeklyclasses">
                <img
                    src="weekly.png"
                    className="practice-grid-item"
                    style={{
                        height: 'auto',
                        width: '400px',
                        borderRadius: '20px',
                    }}
                />
            </NavLink>
            <NavLink to="privatesessions">
                <img
                    src="private.png"
                    className="practice-grid-item"
                    style={{
                        height: 'auto',
                        width: '400px',
                        borderRadius: '20px',
                    }}
                />
            </NavLink>
        </div>
    )
}
