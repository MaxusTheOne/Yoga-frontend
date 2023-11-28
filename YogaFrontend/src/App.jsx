import Eventpage from './components/Eventpage/Eventpage.jsx'
import Homepage from './components/Homepage.jsx'
import FaceYoga from './components/Homepage/FaceYoga.jsx'
import Online from './components/Homepage/Online.jsx'
import PrivateSessions from './components/Homepage/PrivateSessions.jsx'
import { Route, Routes } from 'react-router-dom'
// import "./homepage.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<Homepage />} />
                <Route path="events" element={<Eventpage />} />
                <Route path="faceyoga" element={<FaceYoga />} />
                <Route path="online" element={<Online />} />
                <Route path="privatesessions" element={<PrivateSessions />} />
            </Routes>
        </>
    )
}

export default App
