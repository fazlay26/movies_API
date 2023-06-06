
import React, { useRef } from 'react';

const BookingModal = ({ summary }) => {
    const modalRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const movieName = e.target.movieName.value;
        const userName = e.target.user.value;
        const phone = e.target.phone.value;
        const schedule = e.target.schedule.value;
        const date = e.target.date.value;
        const bookingInfo = { movieName, userName, phone, schedule, date }
        console.log(bookingInfo);
        closeModal();
        const jsonString = JSON.stringify(bookingInfo);
        sessionStorage.setItem('booking', jsonString);

    }


    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };
    return (
        <>

            <dialog id="my_modal_3" className="modal" ref={modalRef}>


                <div className='modal-box'>
                    <button onClick={closeModal} htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg pb-4">Get Your Tickets!</h3>
                    <form onSubmit={handleSubmit} method="dialog" >
                        <input name='movieName' type="text" value={summary.name} readOnly placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <br />
                        <br />
                        <input name='user' type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" />
                        <br />
                        <br />
                        <input type="number" name='phone' placeholder="Enter Your Number" className="input input-bordered w-full max-w-xs" />
                        <br />
                        <br />
                        <input name='schedule' type="text" readOnly value={summary.schedule.time + " " + summary.schedule.days[0]} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <br />
                        <br />
                        <input name='date' readOnly value={summary.premiered} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <br />
                        <br />
                        <button className="btn btn-warning w-full max-w-xs">BOOK</button>

                    </form>
                </div>

            </dialog>

        </>
    );
};

export default BookingModal;