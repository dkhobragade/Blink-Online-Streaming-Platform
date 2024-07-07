import React, { useEffect, useState } from 'react'
import LoginBg from '../../Assets/LoginBg.jpg'
import { Box, Card, Center, rem } from '@mantine/core'
import TextInput from '../LowLevel/TextInput'
import PasswordInput from '../LowLevel/PasswordInput'
import Button from '../LowLevel/Button'
import Text from '../LowLevel/Title'
import { preparePromise } from '../../constant'
import ElemsRow from '../LowLevel/ElemsRow'

interface InitialVal {
    userName: string
    password: string
}

export default function Login() {
    const [initialVal, setInitialVal] = useState<InitialVal>({} as InitialVal)
    const [signInBtn, setSignInBtn] = useState<boolean>(false)
    const [apiData, setApiData] = useState<any>()

    useEffect(() => {
        fetchAPIData()
        initilizedEmptyData()
    }, [])

    const initilizedEmptyData = () => {
        const _initialVal = { ...initialVal }
        _initialVal.userName = ''
        _initialVal.password = ''
        setInitialVal(_initialVal)
    }

    const fetchAPIData = () => {
        preparePromise('get', 'authentication/token/new').then((resp) => {
            setApiData(resp.request_token)
        })
    }

    const onUserNameChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        const _initialVal = { ...initialVal }
        _initialVal.userName = value.currentTarget.value
        setInitialVal(_initialVal)
    }

    const onPasswordChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        const _initialVal = { ...initialVal }
        _initialVal.password = value.currentTarget.value
        setInitialVal(_initialVal)
    }

    const onSignInClick = () => {
        if (initialVal?.userName.trim() === '' || initialVal?.password.trim() === '') return
        setSignInBtn(true)
        preparePromise('post', 'authentication/token/validate_with_login', {
            username: initialVal.userName,
            password: initialVal.password,
            request_token: apiData,
        }).then((resp) => {
            if (resp.success === true) {
                setSignInBtn(false)
            }
        })
    }

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
            }}
        >
            <Card
                p={rem(30)}
                w={rem(600)}
                h={rem(500)}
                radius="lg"
                style={{
                    backgroundColor: 'rgba(58, 61, 60, 0.8)',
                }}
            >
                <ElemsRow spacing="lg">
                    <Text fontFamily="Georgia" text="Sign In" color="#E50914" size={1} strong />
                    <TextInput
                        value={initialVal.userName}
                        size="lg"
                        radius="lg"
                        onChange={(e) => onUserNameChange(e)}
                        text="Email or Mobile Number"
                    />
                    <PasswordInput
                        value={initialVal.password}
                        size="lg"
                        radius="lg"
                        onChange={(e) => onPasswordChange(e)}
                        text="Password"
                    />
                    <Button
                        radius="lg"
                        size="lg"
                        color="#E50914"
                        onClick={onSignInClick}
                        text="Sign In"
                        fullWidth={true}
                        loading={signInBtn}
                    />
                </ElemsRow>
            </Card>
        </Box>
    )
}
