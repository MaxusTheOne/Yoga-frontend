import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev)
    }

    const closeDropdown = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown)

        return () => {
            document.removeEventListener('mousedown', closeDropdown)
        }
    }, [])

    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <div className="dropdown-header" onClick={toggleDropdown}>
                <div className="dropdown-header-line"></div>
                <div className="dropdown-header-line"></div>
                <div className="dropdown-header-line"></div>
                {isOpen && (
                    <div className="dropdown-options">
                        <NavLink to="/media">content</NavLink>
                        <NavLink to="/events">events</NavLink>
                        <NavLink to="/admin">admin</NavLink>
                    </div>
                )}
            </div>
        </div>
    )
}
