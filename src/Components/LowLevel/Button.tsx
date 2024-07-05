import { Button as Btn } from 'antd'

interface Props {
    text: string
}

export default function Button(props: Props) {
    return <Btn type="primary">{props.text}</Btn>
}
