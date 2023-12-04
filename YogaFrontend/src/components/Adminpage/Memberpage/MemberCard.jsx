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
                </div>
            }
            <div className="memberCard-text-container">
                <div className="memberCard-margin">
                    <h2 className="memberCard-text">
                        {firstName} {lastName}
                    </h2>
                    <p className="memberCard-text">
                        {handleMemberStatus(user)}
                    </p>
                    <p className="memberCard-text">{email}</p>
                </div>
            </div>
        </div>
    )
}
