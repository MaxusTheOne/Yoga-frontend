import { useState } from 'react'

export default function AddContentDialog({ handleCloseDialog }) {
    AddContentDialog.propTypes
    const [contentAdded, setContentAdded] = useState(false)
    const [contentNotAdded, setContentNotAdded] = useState(false)
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [linkDescription, setLinkDescription] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')

    async function handleCreate(event) {
        event.preventDefault()

        const newEvent = {
            title,
            link,
            linkDescription,
            description,
            img,
        }

        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + '/media',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newEvent),
                }
            )
            if (response.ok) {
                console.log('content added successfully')
                setContentAdded(true)
                //Clear fields
                setTitle('')
                setLink('')
                setLinkDescription('')
                setDescription('')
                setImg('')
                handleCloseDialog()
            } else {
                setContentNotAdded(true)
                console.error('Failed to submit the form:', response.status)
            }
        } catch (error) {
            console.error('Error during fetch:', error)
        }
    }

    return (
        <>
            <div>
                <dialog className="update-form-dialog" open>
                    <h2>Edit Post</h2>

                    <form onSubmit={handleCreate}>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <label>Link:</label>
                        <input
                            type="text"
                            name="link"
                            value={link}
                            onChange={(event) => setLink(event.target.value)}
                        />
                        <label>Link Description:</label>
                        <input
                            type="text"
                            name="linkDescription"
                            value={linkDescription}
                            onChange={(event) =>
                                setLinkDescription(event.target.value)
                            }
                        />
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                        />
                        <label>Image URL:</label>
                        <input
                            type="text"
                            name="img"
                            value={img}
                            onChange={(event) => setImg(event.target.value)}
                        />
                        <button type="submit">Create Post</button>
                        <button type="button" onClick={handleCloseDialog}>
                            Cancel
                        </button>
                        {contentAdded && (
                            <p className="event-signup-success">
                                Content added sucucessfully, you can close this
                                window
                            </p>
                        )}
                        {contentNotAdded && (
                            <p className="event-signup-error">
                                An error occurred please try again
                            </p>
                        )}
                    </form>
                </dialog>
            </div>
        </>
    )
}
