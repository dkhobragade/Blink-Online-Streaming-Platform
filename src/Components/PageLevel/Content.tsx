import Carousel from '../LowLevel/Carousel'
import { carouselList, CarouselListData } from '../../constant';
import CarouselList from '../LowLevel/CarouselList';
import { Box } from '@mantine/core';

export default function Content() {

    return (
        <Box>
            <Carousel children={carouselList} />
            <CarouselList children={CarouselListData} title='Recommend' />
            <CarouselList children={CarouselListData} title='Trending' />
            <CarouselList children={CarouselListData} title='Latest Movies' />
        </Box>
    )
}
