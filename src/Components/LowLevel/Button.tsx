import { Button as Btn } from 'antd'

interface Props {
    text: string
    type: 'primary' | 'default' | 'dashed' | 'text' | 'link'
    loading?: boolean
    ghost?: boolean
    size?: 'small' | 'middle' | 'large'
    classNames?: string
}

export default function Button(props: Props) {
    return (
        <Btn
            className={props.classNames}
            size={props.size}
            ghost={props.ghost}
            type={props.type}
            loading={props.loading}
        >
            {props.text}
        </Btn>
    )
}
