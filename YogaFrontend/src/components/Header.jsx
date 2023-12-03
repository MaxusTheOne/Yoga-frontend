import { useState } from 'react'
import NavBar from './NavBar'
import SignUpDialog from './SignUp/SignUpDialog'

export default function Header() {
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
                <h1> </h1>
                <h1>Marcela Christjansen Yoga</h1>
                <button className="signUpButton" onClick={handleOpenDialog}>
                    Sign up
                </button>
                {openDialog && (
                    <SignUpDialog handleCloseDialog={handleCloseDialog} />
                )}
            </div>
            <NavBar />
        </header>
    )
}
