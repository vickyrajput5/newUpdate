import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzIxZjdiYjAxNGNmMGI3MGM0MjAyMTFhYzE5MGRjZCIsInN1YiI6IjY0NWFiYzVjZmUwNzdhNWNhZWQ5ZTU1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n1mbk3Xek-JCeG8-7JfTYDQHTtNBXeYAlcL86EQyRRQ";

const headers ={
    Authorization: "bearer " + TMDB_TOKEN, 
};

export const fetchDataFromApi = async (url, params) =>{
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params 
        })
        return data;
    } catch (error) {
        console.log(error);
        return error
    }
}