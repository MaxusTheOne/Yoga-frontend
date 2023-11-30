export default function EventDialog({ matchingEvent, closeEventDialog }) {
    EventDialog.propTypes

    return (
        <div className="eventDialog-overlay">
            <div className="eventDialog-container">
                <dialog className="eventDialog" open>
                    <div
                        onClick={closeEventDialog}
                        className="eventDialog-close-button"
                    >
                        X
                    </div>
                    <h1 className="eventDialog-title">{matchingEvent.title}</h1>
                    <p className="eventDialog-time">
                        {matchingEvent.startTime} <br /> until <br />{' '}
                        {matchingEvent.endTime} {matchingEvent.end}{' '}
                    </p>
                    <p className="eventDialog-description">
                        {matchingEvent.description}
                    </p>
                    <button className="eventDialog-sign-up-button">
                        Sign up
                    </button>
                </dialog>
            </div>
        </div>
    )
}
