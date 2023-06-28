import axios from '../api/axios';
import {useEffect, useState} from "react";
import requests from "../api/request";

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        const res = await axios.get(requests.fetchNowPalying);
        const movieId = res.data.results[
                Math.floor(Math.random() * res.data.results.length)
            ].id
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: "videos" }
        })
        setMovie(movieDetail);
    }

    return (
        <header
            className='banner'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: 'top center',
                backgroundSize: 'cover'
            }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    { movie.title || movie.name || movie.original_name }
                </h1>

                <div className='banner__buttons'>
                    {
                        movie?.videos?.results[0]?.key &&
                        <button className='banner__button play'>
                            Play
                        </button>
                    }
                </div>
                <p className='banner__description'>
                    { movie.overview }
                </p>
            </div>
            <div className='banner--fadeBottom' />
        </header>
    )
}

export default Banner;