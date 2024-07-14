import { Button as Btn, MantineSize, rem, StyleProp } from '@mantine/core'

interface Props {
    text: string
    loading?: boolean
    size?: MantineSize
    classNames?: string
    fullWidth?: boolean
    onClick?: () => void
    bgColor?: string
    textColor?: string
    radius?: MantineSize
    width?: StyleProp<React.CSSProperties['width']>
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
            color={props.bgColor}
            style={{ color: props.textColor }}
        >
            {props.text}
        </Btn>
    )
}
