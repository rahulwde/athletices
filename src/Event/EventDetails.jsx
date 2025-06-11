import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const EventDetails = () => {
  const event = useLoaderData();
  const { id } = useParams();
  const { title, type, image, location, date, description } = event;

  const { user } = useContext(AuthContext); 
  const email = user?.email || '';
  const displayName = user?.displayName || '';

  // 👉 handle booking
  const handleBooking = async () => {
    const currentEvent = {
      eventId: id,
      title,
      type,
      image,
      location,
      date,
      description,
      user_email: email,
      user_name: displayName,
    };

    try {
      const res = await axios.post('http://localhost:5000/bookings', currentEvent);
      if (res.data) {
Swal.fire({
  title: "Booking successful",
  icon: "success",
  draggable: true
});      }  
    } catch (err) {
      console.error('Booking error:', err);
      
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      {/* Event Image */}
      <div className="w-full max-h-[600px] overflow-hidden rounded-3xl shadow-lg">
        <img className="w-full h-[600px] object-cover object-center" src={image} alt={title} />
      </div>

      <div className="lg:flex gap-10 items-start justify-between mt-8">
        {/* Event Info */}
        <div className="space-y-3 flex-1">
          <h1 className="text-4xl font-bold text-primary">{title}</h1>
          <p className="text-lg font-medium">Type: {type}</p>
          <p className="text-lg font-medium">Date: {date}</p>
          <p className="text-lg font-medium">Location: {location}</p>
          <p className="text-base mt-4">{description}</p>
        </div>

        {/* Booking Form */}
        <div className="flex-1 p-6 border rounded-2xl shadow-md bg-base-200 space-y-4">
          <h2 className="text-2xl font-semibold text-center">Participant Info</h2>
          <input
            type="text"
            className="input input-bordered w-full"
            defaultValue={displayName}
            readOnly
          />
          <input
            type="email"
            className="input input-bordered w-full"
            defaultValue={email}
            readOnly
          />
          <button className="btn btn-neutral w-full mt-4" onClick={handleBooking}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
