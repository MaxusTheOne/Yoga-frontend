import { useState } from 'react'
import SignupsDialog from './SignupsDialog'

export default function EventOverviewCard({
    title,
    event,
    eventSignups,
    userData,
}) {
    EventOverviewCard.propTypes

    const [show, setShow] = useState(false)
    const [data, setData] = useState([])

    function showEventSignUps() {
        const signups = []

        eventSignups.forEach((item) => {
            if (item['event_id'] === event.id) {
                signups.push(item)
            }
        })

        if (signups.length === 0) {
            console.log('no one signed up here')
        } else {
            signups.forEach((item) => {
                userData.forEach((user) => {
                    if (user.id === item['user_id']) {
                        setData((prevData) => [...prevData, user])
                    }
                })
            })
        }
    }

    const list = data.map((item) => {
        return item
    })

    return (
        <>
            {show && <SignupsDialog list={list} />}
            <div
                onClick={() => {
                    showEventSignUps()
                    setShow(true)
                    console.log(data)
                }}
                className="eventOverview-card-container"
            >
                <h2 className="eventOverview-card-title">{title}</h2>
            </div>
        </>
    )
}
