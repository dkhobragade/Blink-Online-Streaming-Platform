import React, { useEffect, useState } from 'react'
import LoginBg from '../../Assets/LoginBg.jpg'
import { Card, rem } from '@mantine/core'
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
    const [apiData, setApiData] = useState<any>()

    useEffect(() => {
        fetchAPIData()
    }, [])

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
        preparePromise('post', 'authentication/token/validate_with_login', {
            username: initialVal.userName,
            password: initialVal.password,
            request_token: apiData,
        }).then((resp) => {
            console.log('sdkfkjbsdkfbs', resp)
        })
    }

    return (
        <div
            style={{
                backgroundImage: `url(${LoginBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                filter: 'brightness(0.7)',
            }}
        >
            <Card
                p={rem(30)}
                w={rem(600)}
                h={rem(600)}
                radius="lg"
                style={{
                    backgroundColor: 'rgba(58, 61, 60, 0.4)',
                }}
            >
                <div style={{ opacity: 1 }}>
                    <ElemsRow spacing="lg">
                        <Text fontFamily="Georgia" text="Sign In" color="red" size={1} strong />
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
                            color="red"
                            onClick={onSignInClick}
                            text="Sign In"
                            fullWidth={true}
                        />
                    </ElemsRow>
                </div>
            </Card>
        </div>
    )
}
