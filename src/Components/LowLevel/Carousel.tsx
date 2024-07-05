import { Carousel as CarouselCard } from 'antd'

interface Props {
    childern: any
}

export default function Carousel(props: Props) {
    return (
        <CarouselCard arrows infinite={false}>
            {props.childern}
        </CarouselCard>
    )
}
