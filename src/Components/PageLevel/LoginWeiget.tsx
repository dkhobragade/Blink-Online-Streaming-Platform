import { Box } from '@mantine/core'
import LoginBg from '../../Assets/LoginBg.jpg'
import Login from './Login'
import SignUp from './SignUp'

interface Props {
    url: string
}

export default function LoginWeiget(props: Props) {
    console.log("props", props.url)
    return (
        <Box
            w="100%"
            h="100vh"
            style={{
                backgroundImage: `url(${LoginBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
            }
        >
            {props.url === "/signUp" ? <SignUp /> :
                <Login />
            }
        </Box >

    )
}

