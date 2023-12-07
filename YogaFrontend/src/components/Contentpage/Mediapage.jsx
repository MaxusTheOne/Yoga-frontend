import { useEffect, useState } from 'react'
import Footer from '../Homepage/Footer'
import Header from '../Homepage/Header'
import MediaCard from './MediaCard'
import AnimatedPage from '../Homepage/AnimatedPage'

export default function MediaPage() {
    const [dbMedia, setDbMedia] = useState([])

    async function fetchMediaFromDatabase() {
        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + '/media'
            )
            const data = await response.json()
            setDbMedia(data)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }

    async function handleDelete(item) {
        if (item.id) {
            try {
                await fetch(
                    import.meta.env.VITE_BACKEND_ENDPOINT + `/media/${item.id}`,
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

    const yogaCardList = dbMedia.map((item) => (
        <MediaCard
            key={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
            link={item.link}
            linkDescription={item.linkDescription}
            item={item}
            handleDelete={handleDelete}
        />
    ))

    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="mediaPage-title">
                    <h1>Content</h1>
                </div>
                <div className="card-container">{yogaCardList}</div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
