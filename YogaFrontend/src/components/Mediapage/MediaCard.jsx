export default function MediaCard({
    title,
    description,
    img,
    link,
    linkDescription,
    // handleDelete,
    // item,
}) {
    MediaCard.propTypes

    return (
        <div className="mediaCard-container">
            {
                // <div className="mediaCard-deleteBtn-container">
                //     <p onClick={() => handleDelete(item)}>X</p>
                // </div>
            }
            <div className="mediaCard-text-container">
                <div className="mediaCard-titleAndLinkDescription">
                    <h2 className="mediaCard-title">{title}</h2>
                    <p className="mediaCard-linkDescription">
                        <a className="mediaCard-linkDescription-a" href={link}>
                            {linkDescription}
                        </a>
                    </p>
                </div>
                <p className="mediaCard-description">{description}</p>
            </div>
            <div className="mediaCard-img-container">
                <img className="mediaCard-img" src={img} />
            </div>
        </div>
    )
}
