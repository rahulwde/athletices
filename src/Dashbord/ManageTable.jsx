import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router';

const ManageTable = ({manageEventPromise}) => {
  // const {user}= use(AuthContext)
  const navigate = useNavigate()
  const manageEvent = use(manageEventPromise)
  console.log(manageEvent)
    if (manageEvent.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-60 text-center bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          No Tasks Found
        </h2>
        <p className="text-gray-600 text-base">
       Event Data Not Found
        </p>
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
        {manageEvent.map((task) => (
          <tr key={task._id}>
            <td className="border border-gray-300 p-2"><img src={task.image} alt="" /></td>
            <td className="border border-gray-300 p-2">{task.title}</td>
            <td className="border border-gray-300 p-2">${task.type}</td>
            <td className="border border-gray-300 p-2">{task.location}</td>
            <td className="border border-gray-300 p-2">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  // onClick={() => navigate(`/update-task/${task._id}`)}
                  className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                >
                   update
                </button>
                <button
                  // onClick={() => handleDelete(task._id)}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-white"
                >
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