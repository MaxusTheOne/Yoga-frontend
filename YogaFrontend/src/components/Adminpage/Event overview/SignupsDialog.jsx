import AnimatedPage from '../../Homepage/AnimatedPage'
import SignedupUser from './SignedupUser'

export default function SignupsDialog({ list }) {
    SignupsDialog.propTypes

    const toShow = list.map((item) => (
        <SignedupUser
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
        />
    ))

    return (
        <>
            <AnimatedPage>
                <div className="signups-dialog-overlay">
                    <dialog className="signups-dialog" open>
                        <p className="close-button-signups">X</p>
                        <div className="signups-title">
                            <h1>Member sign ups</h1>
                        </div>
                        <div className="signups-dialog-container">{toShow}</div>
                    </dialog>
                </div>
            </AnimatedPage>
        </>
    )
}
