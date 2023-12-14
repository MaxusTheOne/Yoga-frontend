import Header from '../../Homepage/Header'
import Footer from '../../Homepage/Footer'
import { useEffect, useState } from 'react'
import MemberCard from './MemberCard'
import AnimatedPage from '../../Homepage/AnimatedPage'
import { NavLink } from 'react-router-dom'

export default function SeeAllMembers() {
    const [userInfo, SetUserInfo] = useState([])

    async function fetchMediaFromDatabase() {
        try {
            const response = await fetch(
                import.meta.env.VITE_BACKEND_ENDPOINT + '/users'
            )
            const data = await response.json()
            SetUserInfo(data)
        } catch (error) {
            console.log('Error fetching events:', error)
        }
    }

    async function handleEditMemberStatus(user) {
        //Check current member status
        if (user.memberStatus == 0)
            try {
                //If user is not an active member, promote them
                await fetch(
                    import.meta.env.VITE_BACKEND_ENDPOINT +
                        `/users/${user.id}/promote`,
                    {
                        method: 'PUT',
                    }
                )

                fetchMediaFromDatabase()
            } catch (error) {
                //Error handling
                console.log('Error fetching events:', error)
            }
        else {
            try {
                //If user is an active member, demote them
                await fetch(
                    import.meta.env.VITE_BACKEND_ENDPOINT +
                        `/users/${user.id}/demote`,
                    {
                        method: 'PUT',
                    }
                )

                fetchMediaFromDatabase()
            } catch (error) {
                //Error handling
                console.log('Error fetching events:', error)
            }
        }
    }

    async function handleDelete(user) {
        //See if the user has a user.id and therefore is an actual user
        if (user.id) {
            try {
                await fetch(
                    import.meta.env.VITE_BACKEND_ENDPOINT + `/users/${user.id}`,
                    {
                        method: 'DELETE',
                    }
                )
                fetchMediaFromDatabase()
            } catch (error) {
                //Error handling
                console.error('Error deleting media:', error)
            }
        } else {
            console.log('this is hardcoded and cannot be deleted')
        }
    }

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        fetchMediaFromDatabase()
    }, [])

    function handleMemberStatus(user) {
        if (user.memberStatus === 1) {
            return <span className="paid-member">Full member</span>
        } else return <span className="not-paid-member">Guest</span>
    }

    // Create an array of MemberCard components based on user data
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
            handleEditMemberStatus={handleEditMemberStatus}
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
