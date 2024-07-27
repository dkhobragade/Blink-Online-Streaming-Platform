import React, { useEffect, useState } from 'react'
import { Card, rem } from '@mantine/core'
import TextInput from '../LowLevel/TextInput'
import PasswordInput from '../LowLevel/PasswordInput'
import Button from '../LowLevel/Button'
import Text from '../LowLevel/Text'
import Title from '../LowLevel/Title'
import ElemsRow from '../LowLevel/ElemsRow'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import notify from '../../Themes/notify'
import FlexContainer from '../LowLevel/FlexContainer'

interface InitialVal {
    userName: string
    password: string
}

export default function Login() {
    const [initialVal, setInitialVal] = useState<InitialVal>({} as InitialVal)
    const [signInBtn, setSignInBtn] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        initilizedEmptyData()
    }, [])

    const initilizedEmptyData = () => {
        const _initialVal = { ...initialVal }
        _initialVal.userName = ''
        _initialVal.password = ''
        setInitialVal(_initialVal)
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
        signInWithEmailAndPassword(auth, initialVal.userName, initialVal.password).then((UserCredential) => {
            const user = UserCredential.user;
            navigate('/homePage')
            notify.success("login in successfully")
        }).catch((error) => {
            notify.error(error.message)
        }).finally(() => {
            setSignInBtn(false)
            initilizedEmptyData()
        })
    }

    const onSignUp = () => {
        console.log("ok")
        navigate('/signUp')
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            onSignInClick();
        }
    };

    return (
        <Card
            p={rem(30)}
            w={rem(400)}
            h={rem(400)}
            radius="lg"
            style={{
                backgroundColor: 'rgba(58, 61, 60, 0.8)',
            }}
        >
            <FlexContainer>
                <ElemsRow>
                    <Title fontFamily="Georgia" text="Sign In" color="#E50914" size={2} strong />
                    <TextInput
                        value={initialVal.userName}
                        size="sm"
                        radius="lg"
                        onChange={(e) => onUserNameChange(e)}
                        text="Email or Mobile Number"
                    />
                    <PasswordInput
                        value={initialVal.password}
                        size="sm"
                        radius="lg"
                        onChange={(e) => onPasswordChange(e)}
                        text="Password"
                        onKeyDown={handleKeyDown}
                    />
                    <Button
                        radius="lg"
                        size="sm"
                        bgColor="#E50914"
                        onClick={onSignInClick}
                        text="Sign In"
                        fullWidth={true}
                        marginTop={true}
                        loading={signInBtn}
                    />
                    <FlexContainer alignItems="end" justifyContent="end">
                        <Text text='New to Blink -' size={'xs'} />
                        <Text text='Sign Up' color='blue' size={'xs'} onClick={onSignUp} />
                    </FlexContainer>
                </ElemsRow>
            </FlexContainer>
        </Card>
    )
}
