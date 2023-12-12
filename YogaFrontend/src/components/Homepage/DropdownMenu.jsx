import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function DropdownMenu() {
    // State to manage the dropdown's open/closed state
    const [isOpen, setIsOpen] = useState(false)

    // Ref to track the dropdown container
    const dropdownRef = useRef(null)

    // Function to toggle the dropdown open/closed
    function toggleDropdown() {
        setIsOpen((prev) => !prev)
    }

    // Function to close the dropdown when clicking outside
    //Had some help from chatGPT to fix this one
    function closeDropdown(event) {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false)
        }
    }

    // Effect to add event listener for closing the dropdown on mousedown
    //Had some help from chatGPT to fix this one
    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown)

        // Cleanup: remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', closeDropdown)
        }
    }, [])

    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <div className="dropdown-header" onClick={toggleDropdown}>
                {/* Lines representing the dropdown icon */}
                <div className="dropdown-header-line"></div>
                <div className="dropdown-header-line"></div>
                <div className="dropdown-header-line"></div>

                {/* Dropdown options shown only when isOpen is true */}
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
