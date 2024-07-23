import Carousel from '../LowLevel/Carousel'
import { carouselList, CarouselListData, List2, tvList } from '../../constant';
import CarouselList from '../LowLevel/CarouselList';
import { Box } from '@mantine/core';
import TestCarousel from '../LowLevel/TestCarousel';

export default function Content() {

    return (
        <TestCarousel/>
        // <Box>
        //     <Carousel children={carouselList} />
        //     <CarouselList children={CarouselListData} title='Recommend' />
        //     <CarouselList children={CarouselListData} title='Trending' />
        //     <CarouselList children={CarouselListData} title='Latest Movies' />
        // </Box>
    )
}
