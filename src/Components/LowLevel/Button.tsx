import { Button as Btn, ButtonFactory, MantineSize, PartialVarsResolver, rem, StyleProp } from '@mantine/core'

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
    border?: boolean
}

export default function Button(props: Props) {

    const customStyle: PartialVarsResolver<ButtonFactory> = () => {
        return {
            root: {
                '--button-hover': props.bgColor ? props.bgColor : 'white'
            },
        };
    }

    return (
        <Btn
            vars={customStyle}
            w={props.width}
            mt={props.marginTop ? rem(15) : 0}
            size={props.size}
            loading={props.loading}
            fullWidth={props.fullWidth}
            onClick={props.onClick}
            radius={props.radius}
            color={props.bgColor}
            style={{ color: props.textColor, border: props.border ? '1px soild white' : '0px', cursor: 'pointer', zIndex: 100 }}
        >
            {props.text}
        </Btn>
    )
}
