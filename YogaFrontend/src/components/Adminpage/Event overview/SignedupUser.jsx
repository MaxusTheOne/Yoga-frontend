export default function SignedupUser({ firstName, lastName, email }) {
    SignedupUser.propTypes

    return (
        <>
            <div className="signedup-user-container">
                <div>
                    <span>{firstName}</span> <span>{lastName}</span>
                </div>
                <span>{email}</span>
            </div>
        </>
    )
}
