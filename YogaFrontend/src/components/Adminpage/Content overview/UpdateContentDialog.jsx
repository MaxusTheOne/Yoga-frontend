import { useState } from 'react'

export default function UpdateFormDialog({ post, onClose, onUpdate }) {
    UpdateFormDialog.propTypes
    const [updatedData, setUpdatedData] = useState({
        title: post.title,
        link: post.link,
        linkDescription: post.linkDescription,
        description: post.description,
        img: post.img,
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUpdatedData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    async function handleUpdate(post) {
        console.log(post)
        if (post.id) {
            const response = await fetch(
                `http://localhost:3000/media/${post.id}`,
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

            const data = await response.json()
            console.log('Media updated successfully:', data)

            onUpdate(data) // Invoke the onUpdate callback
            onClose() // Close the update form dialog
        }
    }

    return (
        <>
            <div>
                <dialog className="update-form-dialog" open>
                    <h2>Edit Post</h2>

                    <form onSubmit={handleUpdate}>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={updatedData.title}
                            onChange={handleInputChange}
                        />
                        <label>Link:</label>
                        <input
                            type="text"
                            name="link"
                            value={updatedData.link}
                            onChange={handleInputChange}
                        />
                        <label>Link Description:</label>
                        <input
                            type="text"
                            name="linkDescription"
                            value={updatedData.linkDescription}
                            onChange={handleInputChange}
                        />
                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={updatedData.description}
                            onChange={handleInputChange}
                        />
                        <label>Image URL:</label>
                        <input
                            type="text"
                            name="img"
                            value={updatedData.img}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Update Post</button>
                        {/* <button type="button" onClick={onClose}>
                            Cancel
                        </button> */}
                    </form>
                </dialog>
            </div>
        </>
    )
}
