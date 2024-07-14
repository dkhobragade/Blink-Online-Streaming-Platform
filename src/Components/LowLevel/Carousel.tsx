import { useEffect, useState } from 'react'
import { Carousel as Slides } from '@mantine/carousel';
import { IconArrowLeft, IconArrowRight, IconPointFilled, IconVolume, IconVolumeOff } from '@tabler/icons-react';
import { Box, rem, Tooltip } from '@mantine/core';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import ElemsRow from './ElemsRow';
import Text from './Title';
import { Image } from '@mantine/core'
import Button from './Button';

interface Props {
    children: any
}

interface CarouselItem {
    id: string;
    name: string;
    year: string;
    genre: string;
    image: string;
    video: string;
    posterImg: string;
    play: boolean;
}

export default function Carousel(props: Props) {
    const [carouselList, setCarouselList] = useState<CarouselItem[]>(props.children);
    const [currentSlideIndex, setCurrentSlideIndex] = useState<string>("1")
    const [isMuted, setIsMuted] = useState<boolean>(true);

    useEffect(() => {
        setCarouselList(props.children);
    }, [props.children]);

    const getControl = (index: number) => {
        setCurrentSlideIndex(String(index))
    }

    const toggleMute = () => {
        const updatedList = carouselList.map((item) => ({
            ...item,
            play: item.id === currentSlideIndex ? !item.play : item.play,
        }));
        setCarouselList(updatedList);
        setIsMuted(!isMuted);
    };

    // console.log("carouselList", carouselList)


    const carouselData = () => {
        return <>
            {carouselList.map((item: any, index: number) => (
                <Slides.Slide key={item.id} >
                    <MediaPlayer style={{
                        width: '100%',
                        height: '550px',
                    }} clip-start-time="35" poster={item.image} posterLoad="visible" loop title={item.movies_name} autoPlay={true} muted={true} src={`${item.video}?vq=hd720`}>
                        <MediaProvider >
                            <Poster src={item.image} />
                        </MediaProvider>
                    </MediaPlayer>
                    <Box p={50} style={{
                        position: 'absolute', bottom: '20px', color: 'whitesmoke'
                    }}>
                        <ElemsRow numCols={2} colStyle="min">
                            <Box>
                                <ElemsRow spacing="lg" >
                                    <Box w={rem(200)}>
                                        <Image style={{ cursor: "pointer" }} src={item.posterImg} />
                                    </Box>
                                    <Box w={40}>
                                        <ElemsRow numCols={2}>
                                            <IconPointFilled />
                                            <Text text={`${item.year}`} />
                                        </ElemsRow>
                                    </Box>
                                    <Text text={item.info} fontFamily={`"Inter",sans-serif`} />
                                    <ElemsRow numCols={2}>
                                        <Button text='Watch Now !' bgColor='white' textColor='black' />
                                    </ElemsRow>
                                </ElemsRow>
                            </Box>
                            <Tooltip label={"kgk"} opened>
                                <Box style={{ zIndex: 10 }}>
                                    {isMuted ? (
                                        <IconVolumeOff style={{ cursor: "pointer" }} color='white' onClick={() => toggleMute()} size={24} />
                                    ) : (
                                        <IconVolume style={{ cursor: "pointer" }} color='white' onClick={() => toggleMute()} size={24} />
                                    )}
                                </Box>
                            </Tooltip>
                        </ElemsRow>
                    </Box>
                </Slides.Slide>
            ))}
        </>
    }



    return <>
        <Slides pt={2} loop slideGap="0" onSlideChange={getControl}
            nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
            previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}>
            {carouselData()}
        </Slides>
    </>

}
