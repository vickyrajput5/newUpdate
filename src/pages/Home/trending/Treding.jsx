import React, { useState } from 'react'
import ContentWrapper from '../../../Component/contentWrapper/ContentWrapper'
import SwitchTab from '../../../Component/switchTab/SwitchTab'
import useFetch from '../../../hooks/useFatch'
import Carousel from '../../../Component/carousel/Carousel'
const Treding = () => {

    const [endPoint, setEndPoint] = useState('day')

    const {data, loading} = useFetch(`/trending/movie/${endPoint}`);

    const onTabChange = (tab) =>{
        setEndPoint(tab === "Day" ? "day" : "week")
    }
    return (
            <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange}/>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading}/>
            </div>
  )
}

export default Treding
