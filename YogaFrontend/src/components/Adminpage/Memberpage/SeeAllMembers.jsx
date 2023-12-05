import Header from '../../Header'
import Footer from '../../Footer'
import { useEffect, useState } from 'react'
import MemberCard from './MemberCard'
import AnimatedPage from '../../AnimatedPage'
import { NavLink } from 'react-router-dom'

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
        if (user.memberStatus === 1) {
            return <span className="paid-member">Full member</span>
        } else return <span className="not-paid-member">Has not paid</span>
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
                <div className="member-overview-title-container">
                    <h1 className="member-overview-title">Members</h1>
                    <NavLink to="/adminMenu">
                        <li className="adminMenu-li">&#8594;To menu &#8592;</li>
                    </NavLink>
                </div>
                <div className="card-container">{userList}</div>
            </AnimatedPage>
            <Footer />
        </>
    )
}
