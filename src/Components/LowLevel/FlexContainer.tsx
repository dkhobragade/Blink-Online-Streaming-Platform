import { Flex, MantineSize, MantineSpacing, MantineStyleProp, StyleProp } from '@mantine/core'

interface Props {
    alignItems?: StyleProp<React.CSSProperties['alignItems']>
    justifyContent?: StyleProp<React.CSSProperties['justifyContent']>
    children?: any
    marginLeft?: string
    gap?: StyleProp<number | MantineSize | (string & {})>
    height?: StyleProp<React.CSSProperties['height']>
    style?: MantineStyleProp
    direction?: StyleProp<React.CSSProperties['flexDirection']>
    onClick?: (e: any) => void
    px?: StyleProp<MantineSpacing>
    py?: StyleProp<MantineSpacing>
    width?: StyleProp<React.CSSProperties['width']>
}

export default function FlexContainer({
    alignItems = 'center',
    justifyContent = 'center',
    children,
    gap = 'md',
    marginLeft,
    height,
    style,
    onClick,
    direction,
    px,
    py,
    width = '100%',
}: Props) {
    return (
        <Flex
            ml={marginLeft}
            px={px}
            py={py}
            direction={direction}
            style={style}
            w={width}
            h={height}
            gap={gap}
            align={alignItems}
            justify={justifyContent}
            onClick={onClick}
        >
            {children}
        </Flex>
    )
}
