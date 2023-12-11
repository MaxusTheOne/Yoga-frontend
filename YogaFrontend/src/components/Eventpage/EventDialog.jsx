import AnimatedPage from '../Homepage/AnimatedPage'
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
                                        {(matchingEvent.linkUrl !== null ||
                                            matchingEvent.linkUrl === '') && (
                                            <a
                                                className="breathe-link"
                                                href={matchingEvent.linkUrl}
                                            >
                                                <br /> Link to Breathe
                                            </a>
                                        )}
                                    </h1>
                                    <p className="eventDialog-time">
                                        {matchingEvent.startTime} <br /> until{' '}
                                        <br /> {matchingEvent.endTime}{' '}
                                        {matchingEvent.end}{' '}
                                    </p>
                                    <p className="eventDialog-description">
                                        {matchingEvent.description}
                                    </p>
                                    <div className="eventDialog-bottom">
                                        <img
                                            className="eventDialog-image"
                                            src={matchingEvent.image}
                                            alt=""
                                        />
                                        <button
                                            onClick={handleSignUpClick}
                                            className="eventDialog-sign-up-button"
                                        >
                                            Sign up
                                        </button>{' '}
                                    </div>
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
