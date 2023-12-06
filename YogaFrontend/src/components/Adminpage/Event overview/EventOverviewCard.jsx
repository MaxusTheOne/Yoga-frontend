import { useState } from 'react'
import SignupsDialog from './SignupsDialog'

export default function EventOverviewCard({
    title,
    event,
    eventSignups,
    userData,
}) {
    EventOverviewCard.propTypes

    const [openDialog, setOpenDialog] = useState(false)

    function handleOpenDialog() {
        setOpenDialog(true)
    }
    function handleCloseDialog() {
        setOpenDialog(false)
    }

    function showEventSignups() {
        const signUpIds = []
        const UsersSignedUp = []

        eventSignups.forEach((item) => {
            if (item['event_id'] === event.id) {
                signUpIds.push(item['user_id'])
            }
        })

        signUpIds.forEach((id) => {
            userData.forEach((user) => {
                if (user.id === id) {
                    UsersSignedUp.push(user)
                }
            })
        })

        UsersSignedUp.forEach((user) =>
            console.log(user, 'signed up for the class')
        )
    }

    return (
        <>
            <div
                onClick={handleOpenDialog}
                className="eventOverview-card-container"
            >
                {openDialog && (
                    <SignupsDialog
                        handleCloseDialog={handleCloseDialog}
                        showEventSignups={showEventSignups}
                    />
                )}
                <h2 className="evenOverview-card-title">{title}</h2>
            </div>
        </>
    )
}
