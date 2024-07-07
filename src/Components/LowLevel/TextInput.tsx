import Text from '../LowLevel/Title'
import { Input, MantineSize } from '@mantine/core'
import { IconUserCircle } from '@tabler/icons-react'

interface Props {
    placeolder?: string
    size?: MantineSize
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    status?: boolean
    text: string
    value?: string
    radius?: MantineSize
}

export default function TextInput(props: Props) {
    return (
        <>
            <Text text={props.text} />
            <Input
                autoComplete="one-time-code"
                radius={props.radius}
                placeholder={props.placeolder}
                onChange={(e) => props.onChange(e)}
                size={props.size}
                value={props.value}
                leftSection={<IconUserCircle />}
            />
        </>
    )
}
