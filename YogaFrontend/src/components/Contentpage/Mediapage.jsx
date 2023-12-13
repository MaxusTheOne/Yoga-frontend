import { useEffect, useState } from 'react'
import Footer from '../Homepage/Footer'
import Header from '../Homepage/Header'
import MediaCard from './MediaCard'
import AnimatedPage from '../Homepage/AnimatedPage'

// MediaPage component for displaying and managing media content
export default function MediaPage() {
    const [dbMedia, setDbMedia] = useState([])

    async function fetchMediaFromDatabase() {
        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + '/media'
            )
            const data = await response.json()

            // Updating state with the fetched media content
            setDbMedia(data)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }

    // Effect to fetch media content when the component mounts
    useEffect(() => {
        fetchMediaFromDatabase()
    }, [])

    // Mapping the fetched media content to MediaCard components
    const yogaCardList = dbMedia.map((item) => (
        <MediaCard
            key={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
            link={item.link}
            linkDescription={item.linkDescription}
        />
    ))

    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="mediaPage-title">
                    <h1>Content</h1>
                </div>
                {/* Container for displaying MediaCard components */}
                <div className="card-container">{yogaCardList}</div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
