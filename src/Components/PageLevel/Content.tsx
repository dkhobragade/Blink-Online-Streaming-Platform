import Carousel from '../LowLevel/Carousel'
import { carouselList, CarouselListData, List2, tvList } from '../../constant';
import CarouselList from '../LowLevel/CarouselList';
import { Box } from '@mantine/core';
import MainCarousel from '../LowLevel/MainCarousel';

export default function Content() {

    return (
        <MainCarousel />
        // <Box>
        //     <Carousel children={carouselList} />
        //     <CarouselList children={CarouselListData} title='Recommend' />
        //     <CarouselList children={CarouselListData} title='Trending' />
        //     <CarouselList children={CarouselListData} title='Latest Movies' />
        // </Box>
    )
}
