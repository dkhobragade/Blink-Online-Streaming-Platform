import { Card, rem } from '@mantine/core'
import React, { useState } from 'react'
import ElemsRow from '../LowLevel/ElemsRow'
import TextInput from '../LowLevel/TextInput'
import PasswordInput from '../LowLevel/PasswordInput'
import Button from '../LowLevel/Button'
import Text from '../LowLevel/Title'
import notify from '../../Themes/notify'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

interface InitialVal {
    userName: string
    password: string
}

const auth = getAuth()

export default function SignUp() {
    const [initialVal, setInitialVal] = useState<InitialVal>({} as InitialVal)
    const [signInBtn, setSignInBtn] = useState<boolean>(false)
    const navigate = useNavigate()

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
        createUserWithEmailAndPassword(auth, initialVal.userName, initialVal.password).then((UserCredential) => {
            const user = UserCredential.user;
            navigate('/')
            notify.success("Account added successfully")
        }).catch((error) => {
            notify.error(error.message)
        }).finally(() => {
            setSignInBtn(false)
        })
    }


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
            <ElemsRow spacing="lg">
                <Text fontFamily="Georgia" text="Sign Up" color="#E50914" size={2} strong />
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
                />
                <Button
                    radius="lg"
                    size="sm"
                    bgColor="#E50914"
                    onClick={onSignInClick}
                    text="Submit"
                    fullWidth={true}
                    loading={signInBtn}
                />
            </ElemsRow>
        </Card>
    )
}

