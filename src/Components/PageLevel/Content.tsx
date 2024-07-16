import { useState } from 'react'
import Carousel from '../LowLevel/Carousel'
import { carouselList } from '../../constant';
import CarouselList from '../LowLevel/CarouselList';


interface ApiDataType {
    movies: Record<string, string>[],
    webshows: Record<string, string>[]
}


export default function Content() {
    const [apiData, setApiData] = useState<ApiDataType>({} as ApiDataType)

    // useEffect(() => {
    //     fetchAPIData()
    // }, [])

    // const fetchAPIData = async () => {
    //     const _apiData = { ...apiData }
    //     const moviesCollection = collection(db, "movies_data");
    //     const moviesSnapshot = await getDocs(moviesCollection);
    //     const moviesList = moviesSnapshot.docs.map(doc => doc.data());
    //     const webCollection = collection(db, "web_data");
    //     const webSnapshot = await getDocs(webCollection);
    //     const webList = webSnapshot.docs.map(doc => doc.data());
    //     _apiData.movies = moviesList
    //     _apiData.webshows = webList
    //     setApiData(_apiData)
    // }


    return (
        <div style={{ paddingBottom: '100px' }}>
            <Carousel children={carouselList} />
            <CarouselList title='Trending' />
        </div>
    )
}
