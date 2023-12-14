import AnimatedPage from '../../Homepage/AnimatedPage'
import SignedupUser from './SignedupUser'

export default function SignupsDialog({ list, event, setShow }) {
    SignupsDialog.propTypes

    let toShow = list.map((item) => (
        <SignedupUser
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
        />
    ))

    if (list.length === 0) {
        toShow = (
            <div className="no-signups-text">
                {' '}
                <p>No sign ups yet</p>
            </div>
        )
    }

    return (
        <>
            <AnimatedPage>
                <div className="signups-dialog-overlay">
                    <dialog className="signups-dialog" open>
                        <p
                            onClick={() => setShow(false)}
                            className="close-button-signups"
                        >
                            X
                        </p>
                        <div className="signups-title">
                            <h1>{event.title}</h1>
                        </div>
                        <div className="signups-dialog-container">{toShow}</div>
                    </dialog>
                </div>
            </AnimatedPage>
        </>
    )
}
