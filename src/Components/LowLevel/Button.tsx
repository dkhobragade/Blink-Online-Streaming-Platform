import { Button as Btn, MantineSize, rem } from '@mantine/core'
interface Props {
    text: string
    loading?: boolean
    size?: MantineSize
    classNames?: string
    fullWidth?: boolean
    onClick?: () => void
    color?: string
    radius?: MantineSize
}

export default function Button(props: Props) {
    return (
        <Btn
            mt={rem(15)}
            className={props.classNames}
            size={props.size}
            loading={props.loading}
            fullWidth={props.fullWidth}
            onClick={props.onClick}
            radius={props.radius}
            color={props.color}
        >
            {props.text}
        </Btn>
    )
}
