import { useState } from 'react'
import SignUpDialog from './SignUp/SignUpDialog'
import DropdownMenu from './DropdownMenu'
import NavBarHomePage from './NavBarHomepage'

export default function HeaderHomepage({ scrollToFAQ, scrollToHIH }) {
    HeaderHomepage.propTypes

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
            <NavBarHomePage
                scrollToFAQ={scrollToFAQ}
                scrollToHIH={scrollToHIH}
            />
            <DropdownMenu />
        </header>
    )
}
