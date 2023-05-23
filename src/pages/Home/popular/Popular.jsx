import React, { useState } from 'react'
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper'
import SwitchTab from '../../../component/switchTab/SwitchTab'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../component/carousel/Carousel'
const Popular = () => {

    const [endPoint, setEndPoint] = useState('movie')

    const {data, loading} = useFetch(`/${endPoint}/popular`);

    const onTabChange = (tab) =>{
        setEndPoint(tab === "Movies" ? "movie" : "tv")
    }
    return (
            <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">Most Papular's</span>
                <SwitchTab data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel endPoint={endPoint} data={data?.results} loading={loading}/>
            </div>
  )
}

export default Popular
