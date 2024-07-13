import { useState } from 'react'
import { Carousel as Slides } from '@mantine/carousel';
import { IconArrowLeft, IconArrowRight, IconVolume, IconVolumeOff } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import ElemsRow from './ElemsRow';
import FlexContainer from './FlexContainer';
import Text from './Title';

interface Props {
    children: any
}

export default function Carousel(props: Props) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1)
    const [isMuted, setIsMuted] = useState<boolean>(true);

    const getControl = (index: number) => {
        setCurrentSlideIndex(index)
    }

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };


    const carouselData = () => {
        return <>
            {props.children.map((item: any, index: number) => (
                <Slides.Slide key={item.id} >
                    <MediaPlayer style={{
                        width: '100%',
                        height: '550px',
                    }} clip-start-time="35" poster={item.image} posterLoad="visible" loop title={item.movies_name} autoPlay={true} muted={isMuted} src={`${item.video}?vq=hd720`}>
                        <MediaProvider >
                            <Poster src={item.image} />
                        </MediaProvider>
                    </MediaPlayer>
                    {/* <ElemsRow numCols={2}>
                        <FlexContainer>
                            <Text text={item.name} />
                            <Text text={item.year} />
                            <Text text={item.genre} />
                        </FlexContainer>
                        <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            border: 'none',
                            borderRadius: '50%',
                            padding: '10px',
                            cursor: 'pointer',
                            zIndex: 10,
                        }}>
                            {isMuted ? <IconVolumeOff color='white' onClick={toggleMute} size={24} /> : <IconVolume color='white' onClick={toggleMute} size={24} />}
                        </div >
                    </ElemsRow> */}
                </Slides.Slide>
            ))}
        </>
    }



    return <>
        <Slides loop slideGap="0" onSlideChange={getControl}
            nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
            previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}>
            {carouselData()}
        </Slides>
    </>

}
