import React from 'react'
import Text from '../LowLevel/Title'
import { MantineSize, PasswordInput as PwdInput } from '@mantine/core'

interface Props {
    placeolder?: string
    size?: MantineSize
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    status?: boolean
    text: string
    value?: string
    radius?: MantineSize
}

export default function PasswordInput(props: Props) {
    return (
        <>
            <Text text={props.text} />
            <PwdInput
                radius={props.radius}
                placeholder={props.placeolder}
                onChange={(e) => props.onChange(e)}
                size={props.size}
                value={props.value}
            />
        </>
    )
}
