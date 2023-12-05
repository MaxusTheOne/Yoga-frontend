export default function MemberCard({
    firstName,
    lastName,
    email,
    handleMemberStatus,
    handleDelete,
    user,
}) {
    MemberCard.propTypes

    return (
        <div className="memberCard-container">
            {
                <div className="memberCard-deleteBtn">
                    <p onClick={() => handleDelete(user)}>X</p>
                    <span>Edit status</span>
                </div>
            }
            <div className="memberCard-text-container">
                <div className="memberCard-margin">
                    <h2 className="memberCard-name">
                        {firstName} {lastName}
                    </h2>
                    <p className="memberCard-status">
                        Status: {handleMemberStatus(user)}
                    </p>
                    <p className="memberCard-email">{email}</p>
                </div>
            </div>
        </div>
    )
}
