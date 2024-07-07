import { Title } from '@mantine/core'

interface Props {
    text: string
    size?: 1 | 2 | 3 | 4 | 5
    color?: string
    strong?: boolean
    fontFamily?: string
}

export default function Text(props: Props) {
    return (
        <Title
            order={props.size ?? 4}
            c={props.color ?? 'white'}
            fw={props.strong ? 'bold' : 'normal'}
            ff={props.fontFamily}
        >
            {props.text}
        </Title>
    )
}
