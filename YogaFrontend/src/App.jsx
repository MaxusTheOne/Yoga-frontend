import Eventpage from './components/Eventpage/Eventpage.jsx'
import Homepage from './components/Homepage.jsx'
import FaceYoga from './components/Homepage/FaceYoga.jsx'
import Online from './components/Homepage/Online.jsx'
import PrivateSessions from './components/Homepage/PrivateSessions.jsx'
import { Route, Routes } from 'react-router-dom'
import MediaPage from './components/Mediapage/Mediapage.jsx'
import AdminPage from './components/Adminpage/Adminpage.jsx'
import MemberManagement from './components/Adminpage/MemberManagement.jsx'
import ContentManagement from './components/Adminpage/ContentManagement.jsx'
import EventManagement from './components/Adminpage/EventManagement.jsx'
import ExtendedMenu from './components/Adminpage/ExtendedMenu.jsx'
import SeeAllMembers from './components/Adminpage/Memberpage/SeeAllMembers.jsx'

// import "./homepage.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<Homepage />} />
                <Route path="adminMenu" element={<ExtendedMenu />} />
                <Route path="memberManagement" element={<MemberManagement />} />
                <Route
                    path="contentManagement"
                    element={<ContentManagement />}
                />
                <Route path="eventManagement" element={<EventManagement />} />
                <Route path="admin" element={<AdminPage />} />
                <Route path="events" element={<Eventpage />} />
                <Route path="media" element={<MediaPage />} />
                <Route path="faceyoga" element={<FaceYoga />} />
                <Route path="online" element={<Online />} />
                <Route path="privatesessions" element={<PrivateSessions />} />
                <Route
                    path="memberOverview"
                    element={<SeeAllMembers />}
                />
            </Routes>
        </>
    )
}

export default App
