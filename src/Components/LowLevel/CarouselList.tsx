import { Carousel } from '@mantine/carousel';
import { CarouselListData, } from '../../constant';
import { Paper } from '@mantine/core';

interface CardProps {
    image: string;
    name: string;
    category: string;
}


const CarouselList = () => {

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


    return (
        <Carousel loop
            slideSize="20%"
            slideGap="lg"
            slidesToScroll={2}
            align="start">
            {carouselData()}
        </Carousel>
    )
}

export default CarouselList
