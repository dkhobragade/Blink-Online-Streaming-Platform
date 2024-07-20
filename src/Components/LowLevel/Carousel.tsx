import { useEffect, useState } from 'react'
import { Carousel as Slides } from '@mantine/carousel';
import { IconArrowLeft, IconArrowRight, IconPointFilled, IconVolume, IconVolumeOff } from '@tabler/icons-react';
import { Box, rem } from '@mantine/core';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import ElemsRow from './ElemsRow';
import Text from './Title';
import { Image } from '@mantine/core'
import Button from './Button';
import FlexContainer from './FlexContainer';

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

    useEffect(() => {
        setCarouselList(props.children);
    }, [props.children]);

    const getControl = (index: number) => {
        const updatedList = carouselList.map((item) => ({
            ...item,
            play: true
        }))
        setCarouselList(updatedList)
    }


    const toggleSound = (id?: string) => {
        const updatedList = carouselList.map((item) => ({
            ...item,
            play: id ? item.id !== id : true
        }));
        setCarouselList(updatedList);
    }

    const carouselData = () => {
        return <>
            {carouselList.map((item: any, index: number) => (
                <Slides.Slide key={item.id} >
                    <MediaPlayer style={{
                        width: '100%',
                        height: '550px',
                    }} clip-start-time="35" poster={item.image} posterLoad="visible" loop title={item.movies_name} autoPlay={true} muted={item.play} src={`${item.video}?vq=hd720`}>
                        <MediaProvider >
                            <Poster src={item.image} />
                        </MediaProvider>
                    </MediaPlayer>
                    <Box p={50} style={{
                        position: 'absolute', bottom: '10px', color: 'whitesmoke',
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
                                    <ElemsRow numCols={1}>
                                        <Text text={item.genre.split(',').join(' | ')} />
                                    </ElemsRow>
                                    <Text text={item.info} fontFamily={`"Inter",sans-serif`} />
                                    <ElemsRow numCols={2}>
                                        <Button text='Watch Now !' bgColor='white' textColor='black' />
                                    </ElemsRow>
                                </ElemsRow>
                            </Box>
                            <FlexContainer alignItems="end" justifyContent="end" >
                                <Box style={{ zIndex: 10 }}>
                                    {item.play ? (
                                        <IconVolumeOff style={{ cursor: "pointer" }} color='white' onClick={() => toggleSound(item.id)} size={24} />
                                    ) : (
                                        <IconVolume style={{ cursor: "pointer" }} color='white' onClick={() => toggleSound()} size={24} />
                                    )}
                                </Box>
                            </FlexContainer>
                        </ElemsRow>
                    </Box>
                </Slides.Slide >
            ))
            }
        </>
    }

    return <Slides loop slideGap="0" onSlideChange={getControl}
        nextControlIcon={<IconArrowRight style={{ width: rem(30), height: rem(100), color: 'white' }} />}
        previousControlIcon={<IconArrowLeft style={{ width: rem(30), height: rem(100), color: 'white' }} />}>
        {carouselData()}
    </Slides>


}
