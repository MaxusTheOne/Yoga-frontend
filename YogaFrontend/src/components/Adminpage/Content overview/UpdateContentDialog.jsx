import { useState } from 'react'

export default function UpdateFormDialog({ post, onClose, onUpdate }) {
    UpdateFormDialog.propTypes
    // State to store updated data with initial values from the post
    const [updatedData, setUpdatedData] = useState({
        title: post.title,
        link: post.link,
        linkDescription: post.linkDescription,
        description: post.description,
        img: post.img,
    })
    // Handle input changes in the form
    const handleInputChange = (event) => {
        const { name, value } = event.target
        // Update the corresponding field in the updatedData state
        setUpdatedData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    async function handleUpdate(event) {
        event.preventDefault()
        // Check if the post has an ID (indicating it exists in the database)
        if (post.id) {
            // Send a PUT request to update the content with the new data
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + `/media/${post.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedData),
                }
            )
            if (!response.ok) {
                // Handle non-successful responses
                console.error(`Failed to update media with ID ${post.id}`)
            }

            onUpdate() // Invoke the onUpdate callback
            onClose() // Close the update form dialog
        }
    }

    return (
        <>
            <div>
                <dialog className="update-form-dialog" open>
                    <h2 className="edit-content-title">Edit Post</h2>

                    <form onSubmit={handleUpdate}>
                        <div className="edit-content-container">
                            <div className="edit-content-row">
                                <div className="edit-content-input-container">
                                    <label>Title:</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={updatedData.title}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="edit-content-input-container">
                                    <label>Link:</label>
                                    <input
                                        type="text"
                                        name="link"
                                        value={updatedData.link}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="edit-content-input-container">
                                    <label>Link Description:</label>
                                    <input
                                        type="text"
                                        name="linkDescription"
                                        value={updatedData.linkDescription}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="edit-content-row">
                                <div className="edit-content-input-container">
                                    <label>Description:</label>
                                    <textarea
                                        className="edit-content-textarea"
                                        rows="5"
                                        cols="23"
                                        name="description"
                                        value={updatedData.description}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="edit-content-input-container">
                                    <label>Image URL:</label>
                                    <input
                                        type="text"
                                        name="img"
                                        value={updatedData.img}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="edit-buttons-container">
                            <button className="logout-button" type="submit">
                                Update Post
                            </button>
                            <button
                                className="logout-button"
                                type="button"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </dialog>
            </div>
        </>
    )
}
