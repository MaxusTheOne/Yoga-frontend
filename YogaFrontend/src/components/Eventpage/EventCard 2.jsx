export default function EventCard({ title, description }) {
    EventCard.propTypes
    return (
        <div className="eventCard-container">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Sign up</button>
        </div>
    )
}
