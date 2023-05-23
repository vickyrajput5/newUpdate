import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.scss'
import useFetch from '../../../hooks/useFatch'
import { useSelector } from 'react-redux';
import ContentWrapper from '../../../Component/contentWrapper/ContentWrapper'
import Img from '../../../Component/lazyLoadImage/Img'

const HeroBanner = () => {
  const [bannerBg , setBannerBg] = useState("");
  const [query, setQuery] = useState(""); 
  const {url} =  useSelector((state)=> state.home)
  const navigate = useNavigate()
  const {data, loading} = useFetch("/movie/upcoming");
useEffect (()=>{

const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
setBannerBg(bg)
}, [data])
const searchQueryHandler = (e) =>{
    if(e.key === "Enter" && query.length > 0){
       navigate(`/search/${query}`)
    }
}

  return (
    <div className='heroBanner'>

     {!loading && <div className="backdrop-img">
        <Img src={bannerBg}/>
      </div> }

      <div className="opacity-layer">
        
      </div>
      <ContentWrapper>
    
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of Movies, TV shows and peoples to discover.
            Explore now.
          </span>
          <div className="searchInput">
            <input type="text" placeholder='Search for a Movies or tv show...' onKeyUp={searchQueryHandler} 
            onChange={(e)=> setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      
      </ContentWrapper>
     
    </div>
  )
}

export default HeroBanner
