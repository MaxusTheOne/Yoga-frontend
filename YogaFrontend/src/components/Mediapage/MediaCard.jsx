export default function MediaCard({ title, description, img, link }) {
    MediaCard.propTypes

    return (
        <>
            <h2>
                <a href={link}>{title}</a>
            </h2>
            <p>{description}</p>
            <img src={img} />
        </>
    )
}
