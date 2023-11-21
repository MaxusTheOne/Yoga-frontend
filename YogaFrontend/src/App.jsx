import Homepage from "./components/Homepage.jsx";
import { Route, Routes } from "react-router-dom";
import "./homepage.css";
import Eventpage from "./components/Eventpage.jsx";

function App() {
  return (
    <>
    <Eventpage/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
