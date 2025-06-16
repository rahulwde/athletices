import axios from 'axios';
import React, { use, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const BookingTable = ({ myBookingPromise }) => {
  const bookings = use(myBookingPromise);
  const [book, setBook] = useState([]);

  useEffect(() => {
    setBook(bookings);
  }, [bookings]);

  const handleCancel = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to cancel this booking?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/bookings/${id}`)
          .then(({ data }) => {
            if (data.deletedCount > 0) {
              const updated = book.filter((b) => b._id !== id);
              setBook(updated);
              Swal.fire("Deleted!", "Your booking has been cancelled.", "success");
            }
          }).catch(() => {
            Swal.fire('Error!', 'Something went wrong.', 'error');
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto mt-8 p-4 max-w-6xl mx-auto">
      <title>Athletics | BookingTable</title>
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700 dark:text-blue-300">My Bookings</h2>
      <table className="min-w-full text-sm text-left border  shadow-md rounded-xl overflow-hidden">
        <thead className="bg-rose-300 dark:bg-rose-800 text-white uppercase text-sm">
          <tr>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Type</th>
            <th className="px-6 py-3">Location</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {book.map((booking) => (
            <tr key={booking._id} className="border-t transition">
              <td className="px-6 py-4">{booking.title}</td>
              <td className="px-6 py-4">{booking.type}</td>
              <td className="px-6 py-4">{booking.location}</td>
              <td className="px-6 py-4">{booking.date}</td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => handleCancel(booking._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
          {book.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-6 text-gray-500 dark:text-gray-400">
                No bookings available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
