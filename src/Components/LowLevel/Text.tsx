import { MantineSize, Text as TextField } from '@mantine/core';

interface Props {
    text:string
    size?: MantineSize | (string & {})
    color?:string
    onClick?: () => void
}


export default function Text(props:Props) {
    return (
        <TextField c={props.color ?? 'white'} className={props.onClick && 'pointer'} onClick={props.onClick} size={props.size}>{props.text}</TextField>
    )
}
