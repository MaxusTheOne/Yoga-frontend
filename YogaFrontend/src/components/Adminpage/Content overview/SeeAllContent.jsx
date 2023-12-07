import Header from '../../Homepage/Header'
import Footer from '../../Homepage/Footer'
import { useEffect, useState } from 'react'
import ContentCard from './ContentCard'
import AnimatedPage from '../../Homepage/AnimatedPage'
import { NavLink } from 'react-router-dom'

export default function SeeAllContent() {
    const [mediaInfo, SetMediaInfo] = useState([])

    async function fetchMediaFromDatabase() {
        try {
            const response = await fetch('http://localhost:3000/media')
            const data = await response.json()
            SetMediaInfo(data)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }

    async function handleDelete(post) {
        if (post.id) {
            try {
                await fetch(`http://localhost:3000/media/${post.id}`, {
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
        />
    ))

    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="member-overview-title-container">
                    <h1 className="member-overview-title">Content</h1>
                    <div className="card-container">{contentList}</div>
                    <NavLink to="/adminMenu">
                        <li className="adminMenu-li">&#8594;To menu &#8592;</li>
                    </NavLink>
                </div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
