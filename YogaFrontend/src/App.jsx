import Eventpage from './components/Eventpage/Eventpage.jsx'
import Homepage from './components/Homepage.jsx'
import { Route, Routes } from 'react-router-dom'
// import "./homepage.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<Homepage />} />
                <Route path="events" element={<Eventpage />} />
            </Routes>
        </>
    )
}

export default App
