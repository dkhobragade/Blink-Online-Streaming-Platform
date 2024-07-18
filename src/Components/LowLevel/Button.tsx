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
    marginTop?: boolean
}

export default function Button(props: Props) {
    return (
        <Btn
            mt={props.marginTop ? rem(15) : 0}
            size={props.size}
            loading={props.loading}
            fullWidth={props.fullWidth}
            onClick={props.onClick}
            radius={props.radius}
            color={props.bgColor}
            style={{ color: props.textColor, cursor: 'pointer', zIndex: 100 }}
        >
            {props.text}
        </Btn>
    )
}
