import Carousel from '../LowLevel/Carousel'
import { carouselList, CarouselListData } from '../../constant';
import CarouselList from '../LowLevel/CarouselList';

export default function Content() {

    return (
        <div style={{ paddingBottom: '100px' }}>
            <Carousel children={carouselList} />
            <CarouselList children={CarouselListData} title='Trending' />
        </div>
    )
}
