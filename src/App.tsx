import './App.css'
import PageLayout from './Components/LowLevel/PageLayout'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginWeiget from './Components/PageLevel/LoginWeiget';

function App() {
    const pathName = window.location.pathname

    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<LoginWeiget url={pathName} />} />
                <Route path='/signUp' element={<LoginWeiget url={pathName} />} />
                <Route path="/homepage" element={<PageLayout />} />
            </Routes>
        </>
    )
}

export default App
