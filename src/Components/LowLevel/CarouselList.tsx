import { Carousel } from '@mantine/carousel';
import { Box, rem } from '@mantine/core';
import ElemsRow from './ElemsRow';
import { IconArrowLeft, IconArrowRight, IconVolume, IconVolumeOff } from '@tabler/icons-react';
import Button from './Button';
import FlexContainer from './FlexContainer';
import { MediaPlayer, MediaProvider, } from '@vidstack/react';
import { useState } from 'react';
import { Image } from '@mantine/core'
import { Text } from '@mantine/core';

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
                <Carousel.Slide color='red' c='red' h={rem(270)} style={{ cursor: 'pointer' }} className='card' onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}>
                    {hoveredIndex === item.id ? (
                        <Box>
                            <MediaPlayer
                                clip-start-time="35"
                                posterLoad="visible"
                                loop
                                autoPlay={true}
                                muted={item.play}
                                src={`${item.video}?vq=hd720`}
                            >
                                <MediaProvider />
                            </MediaPlayer>
                            <Box p={10} style={{ width: '100%' }}>
                                <Box style={{ position: 'absolute', width: '90%', bottom: '8.5rem' }}>
                                    <ElemsRow numCols={2}>
                                        <Box w={rem(70)}>
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
                                    </ElemsRow>
                                </Box>
                                <FlexContainer gap='sm' >
                                    <ElemsRow spacing='0px' >
                                        <Box c='White' fz='10px' ta="justify"   >
                                            <p>
                                                {item.info}
                                            </p>
                                        </Box>
                                        <ElemsRow numCols={2}>
                                            <Button bgColor='#E1E6F0' textColor='grey' fullWidth={false} size='xs' text='Watch Now' marginTop={false} />
                                        </ElemsRow>
                                    </ElemsRow>
                                </FlexContainer>
                            </Box>
                        </Box>
                    ) : (
                        <Box
                            style={{
                                backgroundImage: `url(${item.image})`,
                                height: '100%',
                                width: '100%',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'background-position 1s ease-in-out',
                            }}
                        />
                    )}
                </Carousel.Slide >
            ))
            }
        </>
    }


    return <Box p={10}>
        <ElemsRow>
            {/* <Text text={props.title} size={2} strong fontFamily='"Inter",sans-serif' /> */}
            <Text c="white" >{props.title}</Text>
            <Carousel loop
                slideSize="20%"
                slideGap="lg"
                slidesToScroll={2}
                nextControlIcon={<IconArrowRight style={{ width: rem(30), height: rem(200), color: 'white' }} />}
                previousControlIcon={<IconArrowLeft style={{ width: rem(30), height: rem(200), color: 'white' }} />}
                align="start">
                {carouselData()}
            </Carousel>
        </ElemsRow>
    </Box>

}
