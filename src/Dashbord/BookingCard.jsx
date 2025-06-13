import React, { use } from 'react';

const BookingCard = ({ myBookingPromise }) => {

  const booking = use(myBookingPromise)
  // const { title, image, type, location, date } = booking;
 console.log(booking)
  return (
    <div className="card bg-base-100 shadow-md rounded-xl">
      {
        booking.map(book=> )
      }
      <figure>
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover rounded-t-xl"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-xl font-bold text-primary">{title}</h2>
        <p><span className="font-semibold">Type:</span> {type}</p>
        <p><span className="font-semibold">Date:</span> {date}</p>
        <p><span className="font-semibold">Location:</span> {location}</p>
      </div>
    </div>
  );
};

export default BookingCard;
