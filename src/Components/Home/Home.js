import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import BookingModal from '../BookingModal/BookingModal';

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const url = 'https://api.tvmaze.com/search/shows?q=all';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-4xl font-bold pt-5 text-center'><span className='text-yellow-500'>Movies</span> Information</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
                {
                    movies.map(movie => <Movie
                        key={movie.show.id}
                        movie={movie}></Movie>)
                }

            </div>



        </div>
    );
};

export default Home;