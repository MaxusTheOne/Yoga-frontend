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
                <div className="header-content">
                    <div className="header-title">
                        <h1>Marcela Christjansen Yoga</h1>
                    </div>
                    <div className="signUpButton">
                        <p onClick={handleOpenDialog}>
                            Wanna stay in the loop?
                        </p>
                    </div>
                </div>
                {openDialog && (
                    <SignUpDialog handleCloseDialog={handleCloseDialog} />
                )}
            </div>
            <NavBar />
        </header>
    )
}
