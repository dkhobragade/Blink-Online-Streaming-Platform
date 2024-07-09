import './App.css'
import PageLayout from './Components/LowLevel/PageLayout'
import Login from './Components/PageLevel/Login'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/homepage" element={<PageLayout />} />
        </Routes>
    )
}

export default App
