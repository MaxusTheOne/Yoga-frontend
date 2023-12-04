import Header from '../../Header'
import Footer from '../../Footer'
import { useEffect, useState } from 'react'
import MemberCard from './MemberCard'
import AnimatedPage from '../../AnimatedPage'

export default function SeeAllMembers() {
    const [userInfo, SetUserInfo] = useState([])

    async function fetchMediaFromDatabase() {
        try {
            const response = await fetch('http://localhost:3000/users')
            const data = await response.json()
            SetUserInfo(data)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }

    async function handleDelete(user) {
        if (user.id) {
            try {
                await fetch(`http://localhost:3000/users/${user.id}`, {
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

    function handleMemberStatus(user) {
        const isMember = user.memberStatus === 1
        return isMember ? 'is member' : ''
    }

    const userList = userInfo.map((user) => (
        <MemberCard
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            memberStatus={user.memberStatus}
            user={user}
            handleDelete={handleDelete}
            handleMemberStatus={handleMemberStatus}
        />
    ))

    return (
        <>
            <Header />
            <AnimatedPage>
                <div className="mediaPage-title">
                    <h1>Users</h1>
                </div>
                <div className="card-container">{userList}</div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
