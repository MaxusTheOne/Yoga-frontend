import { useState } from 'react'
import NavBar from './NavBar'
import SignUpDialog from './SignUp/SignUpDialog'
import DropdownMenu from './DropdownMenu'

//Header for all pages, other then homepage, and only include home and contact buttons in the navbar
export default function Header() {
    Header.propTypes

    const [openDialog, setOpenDialog] = useState(false)

    function handleOpenDialog() {
        setOpenDialog(true)
    }

    function handleCloseDialog() {
        setOpenDialog(false)
    }

    return (
        <header>
            <div className="header-div">
                <div className="header-content">
                    <div className="header-title">
                        <h1>Marcela Christjansen Yoga</h1>
                    </div>
                    <div onClick={handleOpenDialog} className="signUpButton">
                        <p>Wanna stay in the loop?</p>
                    </div>
                </div>
                {openDialog && (
                    <SignUpDialog handleCloseDialog={handleCloseDialog} />
                )}
            </div>
            <NavBar />
            <DropdownMenu />
        </header>
    )
}
