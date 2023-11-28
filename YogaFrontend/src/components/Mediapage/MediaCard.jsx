export default function MediaCard({
    title,
    description,
    img,
    link,
    linkDescription,
}) {
    MediaCard.propTypes

    return (
        <div className="mediaCard-container">
            <div className="mediaCard-text-container">
                <h2 className="mediaCard-title">{title}</h2>
                <p className="mediaCard-linkDescription">
                    <a href={link}>{linkDescription}</a>
                </p>
                <p className="mediaCard-description">{description}</p>
            </div>
            <div className="mediaCard-img-container">
                <img className="mediaCard-img" src={img} />
            </div>
        </div>
    )
}
