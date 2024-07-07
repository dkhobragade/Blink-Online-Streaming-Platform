import React from 'react'

interface Props {
    children: any
}

export default function Carousel(props: Props) {
    const showCarouselData = () => {
        return (
            <>
                {props.children.map((item: any) => {
                    return <img src={item.image} alt="" />
                })}
            </>
        )
    }
    return <></>
}
