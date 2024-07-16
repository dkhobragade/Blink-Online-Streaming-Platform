import { Carousel } from '@mantine/carousel';
import { CarouselListData, } from '../../constant';
import { Box, Paper, rem } from '@mantine/core';
import Text from './Title';
import ElemsRow from './ElemsRow';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

interface CardProps {
    image: string;
    name: string;
    category: string;
}

interface Props {
    title: string
}

export default function CarouselList(props: Props) {

    const onMouseEnter = () => {
        console.log("come")
    }

    const onMouseLeave = () => {
        console.log("go")
    }

    function Card({ image }: CardProps) {
        return (
            <Paper
                shadow="md"
                p="xl"
                radius="md"
                style={{ backgroundImage: `url(${image})`, cursor: 'pointer' }}
                className='card'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
            </Paper>
        );
    }

    const carouselData = () => {
        return <>
            {CarouselListData.map((item: any) => (
                <Carousel.Slide>
                    <Card {...item} />
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

