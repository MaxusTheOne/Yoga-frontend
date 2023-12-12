import Header from '../../Homepage/Header'
import Footer from '../../Homepage/Footer'
import { useEffect, useState } from 'react'
import ContentCard from './ContentCard'
import AnimatedPage from '../../Homepage/AnimatedPage'
import { NavLink } from 'react-router-dom'
import UpdateContentDialog from './UpdateContentDialog'

export default function SeeAllContent() {
    const [mediaInfo, SetMediaInfo] = useState([])
    const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false)
    const [selectedPost, setSelectedPost] = useState(null)

    async function fetchMediaFromDatabase() {
        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + '/media'
            )
            const data = await response.json()
            SetMediaInfo(data)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }
    async function openUpdateDialog(post) {
        setSelectedPost(post)
        setIsUpdateDialogOpen(true)
    }

    async function handleUpdate() {
        // You can update state or perform other actions
        setIsUpdateDialogOpen(false)
        fetchMediaFromDatabase()
    }

    async function handleDelete(post) {
        if (post.id) {
            try {
                await fetch(
                    import.meta.env.VITE_BACKEND_ENDPOINT + `/media/${post.id}`,
                    {
                        method: 'DELETE',
                    }
                )
                fetchMediaFromDatabase()
            } catch (error) {
                console.error('Error deleting media:', error)
            }
        } else {
            console.log('this is hardcoded and cannot be deleted')
        }
    }

    useEffect(() => {
        fetchMediaFromDatabase()
    }, [])

    const contentList = mediaInfo.map((post) => (
        <ContentCard
            key={post.id}
            title={post.title}
            link={post.link}
            linkDescription={post.linkDescription}
            description={post.description}
            img={post.img}
            post={post}
            handleDelete={handleDelete}
            openUpdateDialog={() => openUpdateDialog(post)}
        />
    ))

    return (
        <>
            <Header />
            {isUpdateDialogOpen && (
                <UpdateContentDialog
                    post={selectedPost}
                    onClose={() => setIsUpdateDialogOpen(false)}
                    onUpdate={handleUpdate}
                />
            )}
            <AnimatedPage>
                <div className="member-overview-title-container">
                    <h1 className="member-overview-title">Content</h1>
                    <NavLink to="/adminMenu">
                        <li className="adminMenu-li">&#8594;To menu &#8592;</li>
                    </NavLink>
                    <div className="card-container">{contentList}</div>
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
