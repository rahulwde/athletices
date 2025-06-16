import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { GrUpdate } from "react-icons/gr";

const ManageTable = ({ manageEventPromise }) => {
  // const {user}= use(AuthContext)
  const manageEvent = use(manageEventPromise);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    setEvent(manageEvent);
  }, [manageEvent]);
  const handleDelete = (id) => {
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
          .delete(`https://athletics-server.vercel.app/athletics/${id}`)
          .then(({ data }) => {
            if (data.deletedCount > 0) {
              const updated = event.filter((b) => b._id !== id);
              setEvent(updated);
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
  const navigate = useNavigate();

  console.log(manageEvent);
  if (event.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-60 text-center bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          No Tasks Found
        </h2>
        <p className="text-gray-600 text-base">Event Data Not Found</p>
        <button
          onClick={() => navigate("/createEvent")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Post Your First Task
        </button>
      </div>
    );
  return (
    <div className="overflow-x-auto p-5">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className=" ">
            <th className="border border-gray-300 p-2 text-left"></th>
            <th className="border border-gray-300 p-2 text-left">Title</th>
            <th className="border border-gray-300 p-2 text-left">Type</th>
            <th className="border border-gray-300 p-2 text-left">Location</th>
            <th className="border border-gray-300 p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {event.map((task) => (
            <tr key={task._id}>
              <td className="border border-gray-300 p-2">
                <img
                  src={task.image}
                  alt="event"
                  className="w-20 h-20 object-cover rounded"
                />
              </td>
              <td className="border border-gray-300 p-2">{task.title}</td>
              <td className="border border-gray-300 p-2">{task.type}</td>
              <td className="border border-gray-300 p-2">{task.location}</td>
              <td className="border border-gray-300 p-2">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => navigate(`/updateEvent/${task._id}`)}
                    className="bg-yellow-400 px-3 py-1 rounded flex gap-2 items-center hover:bg-yellow-500"
                  >
                    <GrUpdate />
                    update
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 px-3 py-1 rounded flex items-center gap-3 hover:bg-red-600 text-white"
                  >
                    Delete
                    <MdDelete size={25} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTable;
