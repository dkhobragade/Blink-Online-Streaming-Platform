import Carousel from '../LowLevel/Carousel'
import { carouselList, CarouselListData, List2, tvList } from '../../constant';
import CarouselList from '../LowLevel/CarouselList';
import { Box } from '@mantine/core';

export default function Content() {

    return (
        <Box>
            <Carousel children={carouselList} />
            <CarouselList children={CarouselListData} title='Recommend' />
            <CarouselList children={List2} title='Trending Movies' />
            <CarouselList children={tvList} title='TV Shows' />
        </Box>
    )
}
