export default function ContentCard({
    title,
    link,
    linkDescription,
    description,
    handleDelete,
    img,
    post,
    openUpdateDialog,
}) {
    ContentCard.propTypes

    return (
        <div className="mediaCard-container">
            <div className="mediaCard-deleteBtn-container">
                <p onClick={() => handleDelete(post)}>X</p>
            </div>

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
                <button
                    className="admin-content-button"
                    onClick={() => openUpdateDialog(post)}
                >
                    Edit post
                </button>
            </div>
            <div className="mediaCard-img-container">
                <img className="mediaCard-img" src={img} />
            </div>
        </div>
    )
}
