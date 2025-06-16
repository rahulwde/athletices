import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const EventDetails = () => {
  const [alreadyBooked, setAlreadyBooked] = useState(false);
  const event = useLoaderData();
  const { id } = useParams();
  const { title, type, image, location, date, description } = event;

  const { user } = useContext(AuthContext);
  const email = user?.email || "";
  const displayName = user?.displayName || "";

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://athletics-server.vercel.app/bookings?email=${user.email}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        )
        .then((res) => {
          const isBooked = res.data.some((b) => b.eventId === id);
          setAlreadyBooked(isBooked);
        })
        .catch(() => {
          setAlreadyBooked(false);
        });
    }
  }, [id, user?.email]);

  // 👉 handle booking
  const handleBooking = async () => {
    if (alreadyBooked) {
      Swal.fire({
        icon: "info",
        title: "Already Booked",
        text: "You have already booked this event.",
      });
      return;
    }

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
      const res = await axios.post(
        "https://athletics-server.vercel.app/bookings",
        currentEvent
      );
      if (res.data?.insertedId) {
        Swal.fire({
          title: "Booking successful",
          icon: "success",
        });
        setAlreadyBooked(true);
      }
    } catch (err) {
      if (err.response?.status === 409) {
        Swal.fire({
          icon: "error",
          title: "Duplicate Booking",
          text: "You have already booked this event.",
        });
      } else {
        console.error("Booking error:", err);
        Swal.fire("Error", "Something went wrong. Try again.", "error");
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      <title>Athletics | EventDetails</title>
      {/* Event Image */}
      <div className="w-full max-h-[600px] overflow-hidden rounded-3xl shadow-lg">
        <img
          className="w-full h-[600px] object-cover object-center"
          src={image}
          alt={title}
        />
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
          <h2 className="text-2xl font-semibold text-center">
            Participant Info
          </h2>
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
          <button
            className="btn btn-neutral w-full mt-4"
            onClick={handleBooking}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
