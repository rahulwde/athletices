import React, { use } from 'react';
// import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData, useNavigate } from 'react-router';

const UpdateEvent = () => {
  const {title , date , type , image , description , _id} = useLoaderData()
  const {user}= use(AuthContext)
  const navigate = useNavigate()
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const taskData = Object.fromEntries(formData.entries());
    fetch(
      `http://localhost:5000/athletics/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(taskData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          navigate("/event");
          let timerInterval;
          Swal.fire({
            title: "Auto close alert!",
            html: "I will close in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
        }
      });
  };
  return (
     <Wrapper className="max-w-2xl mx-auto p-6 mt-10 rounded-2xl shadow-lg">
       <Helmet>
              <title>updateEvent - Athletics</title>
              <meta name="description" content="Browse and post freelance tasks on TaskMarket." />
            </Helmet>
      <h2 className="text-3xl font-semibold text-center text-blue-700 mb-8">Event</h2>

      <form  onSubmit={handleUpdate} className="space-y-6 text-amber-800">

        {/* Title */}
        <div>
          <Label>Event Title</Label>
          <Input type="text" defaultValue={title} name="title" placeholder="e.g. City Sprint Race" required />
        </div>

        {/* Category */}
        <div>
          <Label>Event Type</Label>
          <Select name="type" defaultValue={type} required>
            <option value="">Select type</option>
            <option>Swimming</option>
            <option>Sprinting</option>
            <option>Long Jump</option>
            <option>High Jump</option>
            <option>Hurdle Race</option>
          </Select>
        </div>
            <div>
          <Label>Event Location</Label>
          <Input type="text" defaultValue={location} name="location" placeholder="Dhaka" required />
        </div>
        {/* Date */}
        <div>
          <Label>Event Date</Label>
          <Input type="date" defaultValue={ date} name="date" required />
        </div>

        {/* Description */}
        <div>
          <Label>Description</Label>
          <Textarea name="description" defaultValue={description} rows="4" placeholder="Write a short event description..." required />
        </div>

        {/* Image */}
        <div>
          <Label>Image URL</Label>
          <Input type="url" name="image" defaultValue={image} placeholder="https://example.com/event.jpg" required />
        </div>

        {/* User Info */}
        <div>
          <Label>Creator Email</Label>
          <Input type="email" name="email" value={user?.email} disabled />
        </div>

        <div>
          <Label>Creator Name</Label>
          <Input type="text" name="creator" value={user?.displayName} disabled />
        </div>

        {/* Submit */}
        <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 font-semibold rounded-xl shadow">
          Create Event
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #f9fafb;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 6px;
  color: #374151;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #d1d5db;
  border-radius: 999px;
  outline: none;
  font-size: 16px;
  &:focus {
    border-color: #2563eb;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #d1d5db;
  border-radius: 999px;
  font-size: 16px;
  color: #374151;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #d1d5db;
  border-radius: 24px;
  font-size: 16px;
  outline: none;
  resize: vertical;
`;


export default UpdateEvent;