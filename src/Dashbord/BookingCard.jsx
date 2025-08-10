import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
// import { useNavigate } from 'react-router-dom';

const BookingCard = ({ myBookingPromise }) => {
  const bookings = use(myBookingPromise);
  const [book, setBook] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setBook(bookings);
    if (bookings.length === 0) {
      Swal.fire({
        icon: "info",
        title: "No Bookings Found",
        text: "You have no bookings. Redirecting to events...",
        timer: 2500,
        showConfirmButton: false,
      }).then(() => {
        navigate("/event");
      });
    }
  }, [bookings, navigate]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://athletics-server.vercel.app/bookings/${id}`)
          .then(({ data }) => {
            if (data.deletedCount > 0) {
              const updated = book.filter((b) => b._id !== id);
              setBook(updated);
              Swal.fire(
                "Deleted!",
                "Your booking has been cancelled.",
                "success"
              );
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <>
      <title>Athletics \BookingCard</title>
      {book.length === 0 ? (
        <div className="text-center text-xl min-h-100vh text-gray-600 dark:text-gray-300 mt-10">
          No bookings found...
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 mt-10">
          {book.map((booking) => (
            <div
              key={booking._id}
              className="bg-base-300 rounded-xl shadow hover:shadow-lg transition p-5"
            >
              <img
                src={booking.image}
                alt={booking.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#f95f35] ">
                  {booking.title}
                </h3>
                <p className="text-base-content text-sm">
                  {booking.description?.slice(0, 100)}...
                </p>
                <div className="text-sm text-base-content ">
                  <p>
                    <strong>Type:</strong> {booking.type}
                  </p>
                  <p>
                    <strong>Date:</strong> {booking.date}
                  </p>
                  <p>
                    <strong>Location:</strong> {booking.location}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleCancel(booking._id)}
                className="btn btn-outline bg-bg-[#f95f35] rounded-xl hover:bg-red-600 text-xl w-full text-center my-3"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default BookingCard;
