import React from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const Movie = (props) => {
    const { id, genres, image, language, name, rating, runtime, schedule, summary } = props.movie.show
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image.original} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Genres:{genres[0]},{genres[1]}</p>
                <p>Language:{language}</p>
                <p>Rating:{rating.average}</p>
                <p>Runtime:{runtime}</p>
                <p>Schedule:{schedule.days[0]},{schedule.time}</p>
                <div className="card-actions">
                    <Link to={`/summary/${id}`}>  <button className="btn btn-outline btn-warning">Show Summary</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Movie;