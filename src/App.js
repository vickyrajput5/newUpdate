import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header'
import Home from './pages/Home/Home'
import Details from './pages/Deteails/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/Explore/Explore'
import PageNotFound from './pages/404/PageNotFound'
import { getApiConfiguration, getGenres } from './store/HomeSlice';
import {fetchDataFromApi} from './utils/api'

function App() {
const dispatch = useDispatch()
const {url} = useSelector((state)=>state.home)
  useEffect(()=>{
    fetchApiConfig()
    genresCall()
  })

  const fetchApiConfig = () =>{
    fetchDataFromApi("/configuration").then((res)=>{
      console.log(res)
      const url ={
        backdrop:res.images.secure_base_url + "original",
        poster:res.images.secure_base_url + "original",
        profile:res.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url))
    })
  }
  const genresCall = async () =>{
    let promises = []
    let endPoints = ["tv", "movie"]
    let allGenres = {}
    
    endPoints.forEach((url)=>{
      promises?.push(fetchDataFromApi(`/genre/${url}/list`))
    })
  
    const data = await Promise?.all(promises);
   
    data.map(({genres})=>{
      return genres?.map((item) => (allGenres[item.id] = item))
    })
    dispatch(getGenres(allGenres))
  }
  return (
   <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/:mediaType/:id" element={<Details/>} />
      <Route path="/search/:query" element={<SearchResult />} />
      <Route path="/explore/:mediaType" element={<Explore />} />
      <Route path="*" element={<PageNotFound />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
   </>
  );
}

export default App;
