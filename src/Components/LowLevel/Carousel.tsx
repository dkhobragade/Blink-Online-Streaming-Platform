import { useState } from 'react'
import { Carousel as Slides } from '@mantine/carousel';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { MediaPlayer, MediaProvider } from '@vidstack/react';

interface Props {
    children: any
}

export default function Carousel(props: Props) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1)

    const getControl = (index: number) => {
        setCurrentSlideIndex(index)
    }

    const carouselData = () => {
        return <>
            {props.children.map((item: any, index: number) => (
                <Slides.Slide key={index} >
                    <MediaPlayer loop title={item.movies_name} autoPlay={true} muted={true} src={item.movies_video}>
                        <MediaProvider />
                    </MediaPlayer>
                </Slides.Slide>
            ))}
        </>
    }



    return <Slides loop slideGap="0" onSlideChange={getControl}
        nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
        previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}>
        {carouselData()}
    </Slides>

}
