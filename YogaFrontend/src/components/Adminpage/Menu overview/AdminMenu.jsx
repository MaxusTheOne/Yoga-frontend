import { NavLink } from 'react-router-dom'

export default function AdminMenu() {
    AdminMenu.propTypes

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>Menu</h2>
            </div>
            <ul>
                <NavLink to="/memberOverview">
                    <li className="adminMenu-li">Manage members</li>
                </NavLink>
                <NavLink to="/contentManagement">
                    <li className="adminMenu-li">Manage Content</li>
                </NavLink>
                <NavLink to="/eventManagement">
                    <li className="adminMenu-li">Manage Events</li>
                </NavLink>
            </ul>
        </div>
    )
}
