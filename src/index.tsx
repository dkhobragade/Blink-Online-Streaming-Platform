import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import '../src/Styles/common.scss'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { theme } from './Themes/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <MantineProvider theme={theme}>
        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
            <App />
        </BrowserRouter>
    </MantineProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
