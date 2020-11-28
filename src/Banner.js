import axios from './axios';
import React, {useState,useEffect} from 'react';
import './Banner.css';
import requests from './requests';

function Banner() {
    const [movie,setmovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(requests.fetchNetflixOriginals);
            setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length -1)]);
            return request;
        }
        fetchData();
    },[])

    console.log(movie);
    return (
        <header 
        className='banner'
        style={{
            backgroundSize:'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center'
        }}
        >
            <div className="banner_contents">
                <h1 className='banner_title'>{movie?.title || movie?.original_name || movie?.original_name}</h1>
                <div className="banner-buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">MyList</button>
                </div>
                <h1 className="banner_description">
                    {movie?.overview}
                </h1>
            </div>
            <div className='fade_bottom'></div>
        </header>
    )
}

export default Banner
