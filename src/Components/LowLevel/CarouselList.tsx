import { Carousel } from '@mantine/carousel';
import { CarouselListData, } from '../../constant';
import { Box, Paper, rem } from '@mantine/core';
import Text from './Title';
import ElemsRow from './ElemsRow';
import { IconArrowLeft, IconArrowRight, IconVolume, IconVolumeOff } from '@tabler/icons-react';
import Button from './Button';
import FlexContainer from './FlexContainer';
import { MediaPlayer, MediaProvider, } from '@vidstack/react';
import { useState } from 'react';
import { Image } from '@mantine/core'

interface CardProps {
    image: string;
    name: string;
    category: string;
    video: string
    posterImg: string
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
    play: boolean
    id: string
}

interface Props {
    title: string
    children: any
}

export default function CarouselList(props: Props) {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [carouselList, setCarouselList] = useState<any[]>(props.children);


    const toggleSound = (id?: string) => {
        const updatedList = carouselList.map((item) => ({
            ...item,
            play: id ? item.id !== id : true
        }));
        setCarouselList(updatedList);
    }

    const carouselData = () => {
        return <>
            {carouselList.map((item: any) => (
                <Carousel.Slide>
                    <Paper
                        shadow="md"
                        radius="md"
                        className='card'
                        onMouseEnter={() => setHoveredIndex(item.id)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {hoveredIndex === item.id ? (
                            <Box>
                                <MediaPlayer
                                    style={{ height: '100%' }}
                                    clip-start-time="35"
                                    posterLoad="visible"
                                    loop
                                    autoPlay={true}
                                    muted={item.play}
                                    src={`${item.video}?vq=hd720`}
                                >
                                    <MediaProvider />
                                </MediaPlayer>
                                <Box style={{ position: 'absolute', bottom: '10px', backgroundColor: "black", height: '100px', width: '100%' }}>
                                    <ElemsRow numCols={2}>
                                        <Box p={10} w={rem(100)}>
                                            <Image src={item.posterImg} />
                                        </Box>
                                        <FlexContainer alignItems="start" justifyContent="end">
                                            <Box style={{ zIndex: 10 }}>
                                                {item.play ? (
                                                    <IconVolumeOff
                                                        style={{ cursor: "pointer" }}
                                                        color='white'
                                                        onClick={() => toggleSound(item.id)}
                                                        size={24}
                                                    />
                                                ) : (
                                                    <IconVolume
                                                        style={{ cursor: "pointer" }}
                                                        color='white'
                                                        onClick={() => toggleSound()}
                                                        size={24}
                                                    />
                                                )}
                                            </Box>
                                        </FlexContainer>
                                        <Button text='Watch Now' bgColor='white' textColor='black' />
                                    </ElemsRow>
                                </Box>
                            </Box>
                        ) : (
                            <div
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    height: '100%',
                                    width: '100%',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    transition: 'background-position 0.3s ease-in-out',
                                }}
                            />
                        )}
                    </Paper>
                </Carousel.Slide>
            ))}
        </>
    }


    return <Box p={10}>
        <ElemsRow>
            <Text text={props.title} size={2} strong fontFamily='"Inter",sans-serif' />
            <Carousel loop
                slideSize="20%"
                slideGap="lg"
                slidesToScroll={2}
                nextControlIcon={<IconArrowRight style={{ width: rem(30), height: rem(100), color: 'white' }} />}
                previousControlIcon={<IconArrowLeft style={{ width: rem(30), height: rem(100), color: 'white' }} />}
                align="start">
                {carouselData()}
            </Carousel>
        </ElemsRow>
    </Box>

}

