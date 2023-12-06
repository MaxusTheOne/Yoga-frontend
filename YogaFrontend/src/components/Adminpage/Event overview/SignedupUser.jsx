export default function SignedupUser({ firstName, lastName, email }) {
    SignedupUser.propTypes

    return (
        <>
            <span>{firstName}</span> <span>{lastName}</span>
            <p>{email}</p>
        </>
    )
}
