import AnimatedPage from '../AnimatedPage'
import SignUpForm from './EventSignup'

export default function EventDialog({
    handleSignUpClick,
    setShowSignUpForm,
    matchingEvent,
    closeEventDialog,
    handleSignUp,
    showSignUpForm,
}) {
    EventDialog.propTypes

    return (
        <>
            <AnimatedPage>
                <div className="eventDialog-overlay">
                    <div className="eventDialog-container">
                        <dialog className="eventDialog" open>
                            <div
                                onClick={closeEventDialog}
                                className="eventDialog-close-button"
                            >
                                X
                            </div>
                            {!showSignUpForm && (
                                <>
                                    <h1 className="eventDialog-title">
                                        {matchingEvent.title}
                                    </h1>
                                    <p className="eventDialog-time">
                                        {matchingEvent.startTime} <br /> until{' '}
                                        <br /> {matchingEvent.endTime}{' '}
                                        {matchingEvent.end}{' '}
                                    </p>
                                    <p className="eventDialog-description">
                                        {matchingEvent.description}
                                    </p>
                                    <button
                                        onClick={handleSignUpClick}
                                        className="eventDialog-sign-up-button"
                                    >
                                        Sign up
                                    </button>{' '}
                                </>
                            )}

                            {showSignUpForm && (
                                <SignUpForm
                                    onClose={() => setShowSignUpForm(false)}
                                    onSignUp={handleSignUp}
                                />
                            )}
                        </dialog>
                    </div>
                </div>
            </AnimatedPage>
        </>
    )
}
