import Eventpage from './components/Eventpage/Eventpage.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import FaceYoga from './components/Homepage/FaceYoga.jsx'
import Online from './components/Homepage/Online.jsx'
import PrivateSessions from './components/Homepage/PrivateSessions.jsx'
import { Route, Routes } from 'react-router-dom'
import MediaPage from './components/Contentpage/Mediapage.jsx'
import AdminPage from './components/Adminpage/AdminPage.jsx'
import ContentManagement from './components/Adminpage/ContentOverview/ContentManagement.jsx'
import EventManagement from './components/Adminpage/EventOverview/EventManagement.jsx'
import ExtendedMenu from './components/Adminpage/MenuOverview/ExtendedMenu.jsx'
import SeeAllMembers from './components/Adminpage/MemberOverview/SeeAllMembers.jsx'
import EventSignups from './components/Adminpage/EventOverview/EventSignups.jsx'
import Contact from './components/Homepage/Contact.jsx'
import SeeAllContent from './components/Adminpage/ContentOverview/SeeAllContent.jsx'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<Homepage />} />
                <Route path="contact" element={<Contact />} />
                <Route path="eventSignups" element={<EventSignups />} />
                <Route path="adminMenu" element={<ExtendedMenu />} />
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
                <Route path="memberOverview" element={<SeeAllMembers />} />
                <Route path="contentOverview" element={<SeeAllContent />} />
            </Routes>
        </>
    )
}

export default App
