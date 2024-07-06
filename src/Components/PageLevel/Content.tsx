import React, { useEffect, useState } from 'react'
import { img_https, preparePromise } from '../../constant'
import { useSearchParams } from 'react-router-dom'
import Carousel from '../LowLevel/Carousel'

export default function Content() {
    const [apiData, setApiData] = useState<any>()

    useEffect(() => {
        fetchAPIData()
    }, [])

    const fetchAPIData = () => {
        preparePromise('trending/all/day').then((resp) => {
            setApiData(processMovieListData(resp))
        })
    }

    const processMovieListData = (resp: any) => {
        if (resp.results.length > 0) {
            return resp.results.map((item: any) => ({
                id: item.id,
                title: item.title,
                original_title: item.original_title,
                overview: item.overview,
                backdrop_path: item.backdrop_path,
                image: `${img_https}${item.poster_path}`,
            }))
        }
    }

    console.log('apiData', apiData)

    return (
        <div style={{ color: 'red' }}>
            <Carousel children={apiData ?? []} />
        </div>
    )
}
