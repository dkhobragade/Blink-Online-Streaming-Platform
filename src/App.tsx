import { useState } from 'react'
import './App.css'
import PageLayout from './Components/LowLevel/PageLayout'
import Sider from './Components/LowLevel/Sider'
import Content from './Components/PageLevel/Content'

function App() {
    return <PageLayout sider={<Sider />} content={<Content />}></PageLayout>
}

export default App
