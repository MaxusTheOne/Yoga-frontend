import AnimatedPage from '../AnimatedPage'
import EventSignUp from './EventSignup'

export default function EventDialog({
    handleSignUpClick,
    matchingEvent,
    closeEventDialog,
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
                                <EventSignUp
                                    matchingEvent={matchingEvent}
                                    closeEventDialog={closeEventDialog}
                                />
                            )}
                        </dialog>
                    </div>
                </div>
            </AnimatedPage>
        </>
    )
}
