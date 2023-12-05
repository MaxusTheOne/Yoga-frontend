import AnimatedPage from '../../Homepage/AnimatedPage'

export default function SignupsDialog({ handleCloseDialog, showEventSignups }) {
    SignupsDialog.propTypes

    const list = showEventSignups()

    console.log(list)

    return (
        <>
            <AnimatedPage>
                <div className="signups-dialog-overlay">
                    <dialog open className="signups-dialog">
                        <p onClick={() => handleCloseDialog}>X</p>
                        <div className="signups-dialog-container"></div>
                    </dialog>
                </div>
            </AnimatedPage>
        </>
    )
}
