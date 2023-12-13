//Component for rendering each signed up user within the event signups dialog
export default function SignedupUser({ firstName, lastName, email }) {
    //This line to prevent error messages
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
