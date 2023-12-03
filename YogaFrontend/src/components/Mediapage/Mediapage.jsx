import { useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import MediaCard from './MediaCard'
import AnimatedPage from '../AnimatedPage'

export default function MediaPage() {
    const [dbMedia, setDbMedia] = useState([])

    async function fetchMediaFromDatabase() {
        try {
            const response = await fetch('http://localhost:3000/media')
            const data = await response.json()
            setDbMedia(data)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }

    async function handleDelete(item) {
        if (item.id) {
            try {
                await fetch(`http://localhost:3000/media/${item.id}`, {
                    method: 'DELETE',
                })
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

    const yogaMedia = [
        {
            title: 'Flow video class',
            description:
                'This is an online video class about flow yoga that was recorded',
            img: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
            link: 'https://youtu.be/ke9XLlSvbjk?feature=shared',
            linkDescription: 'See media',
        },
        {
            title: 'Sleeping Yoga',
            description: 'Read about sleeping yoga and all the benefits',
            img: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
            link: 'https://en.wikipedia.org/wiki/Yoga',
            linkDescription: 'See media',
        },
        {
            title: 'Jumping Yoga',
            description: 'Read about jumping yoga and all the benefits',
            img: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
            link: 'https://en.wikipedia.org/wiki/Yoga',
            linkDescription: 'See media',
        },
        {
            title: 'Talking Yoga',
            description: 'Read about talking yoga and all the benefits',
            img: 'https://www.stockvault.net/data/2018/06/24/252636/preview16.jpg',
            link: 'https://en.wikipedia.org/wiki/Yoga',
            linkDescription: 'See media',
        },
    ]

    const testDataList = yogaMedia.map((item) => (
        <MediaCard
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.img}
            link={item.link}
            linkDescription={item.linkDescription}
            item={item}
            handleDelete={handleDelete}
        />
    ))

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
                    <h1>Free content</h1>
                </div>
                <div className="card-container">
                    {yogaCardList}
                    {testDataList}
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
