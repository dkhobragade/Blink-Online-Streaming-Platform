import { ChangeEvent } from 'react'
import './App.css'
import PageLayout from './Components/LowLevel/PageLayout'
import PasswordInput from './Components/LowLevel/PasswordInput'
import Sider from './Components/LowLevel/Sider'
import TextInput from './Components/LowLevel/TextInput'
import Content from './Components/PageLevel/Content'
import Login from './Components/PageLevel/Login'

function App() {
    const onUserNameChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        console.log(value.currentTarget.value)
    }

    const onPasswordChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        console.log(value.currentTarget.value)
    }

    return (
        <>
            <Login />
            {/* <PageLayout sider={<Sider />} content={<Content />}></PageLayout> */}
            {/* <TextInput onChange={(e) => onUserNameChange(e)} />
            <PasswordInput onChange={(e) => onPasswordChange(e)} /> */}
        </>
    )
}

export default App
