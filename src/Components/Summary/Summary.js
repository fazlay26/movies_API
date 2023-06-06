import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const Summary = () => {
    const summary = useLoaderData();
    console.log(summary);




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={summary.image.original} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{summary.name}</h1>
                    <p className="py-6"> {summary.summary} </p>

                    <button onClick={() => window.my_modal_3.showModal()} className="btn  btn-warning">Book Movie Ticket</button>


                </div>
            </div>
            <BookingModal summary={summary}></BookingModal>

        </div>


    );
};

export default Summary;