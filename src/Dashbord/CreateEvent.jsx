import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const CreateEvent = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.email = user?.email;
    data.name = user?.displayName;
   
    axios
      .post("https://athletics-server.vercel.app/athletics", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "create event successfully",
            icon: "success",
            draggable: true,

          });
          
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper className="max-w-2xl bg-base-200 mx-auto p-6 mt-10 rounded-2xl  bg-base-300 shadow-lg">
      <title>CreateEvent - Athletics</title>

      <h2 className="text-3xl font-semibold text-center text-[#f95f35] mb-8">
        Create New Event
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 text-amber-800">
        {/* Title */}
        <div>
          <Label>Event Title</Label>
          <Input
            type="text"
            name="title"
            placeholder="e.g. City Sprint Race"
            required
          />
        </div>

        {/* Category */}
        <div>
          <Label>Event Type</Label>
          <Select name="type" required>
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
          <Input type="text" name="location" placeholder="Dhaka" required />
        </div>
        {/* Date */}
        <div>
          <Label>Event Date</Label>
          <Input type="date" name="date" required />
        </div>

        {/* Description */}
        <div>
          <Label>Description</Label>
          <Textarea
            name="description"
            rows="4"
            placeholder="Write a short event description..."
            required
          />
        </div>

        {/* Image */}
        <div>
          <Label>Image URL</Label>
          <Input
            type="url"
            name="image"
            placeholder="https://example.com/event.jpg"
            required
          />
        </div>

        {/* User Info */}
        <div>
          <Label>Creator Email</Label>
          <Input type="email" name="email" value={user?.email} disabled />
        </div>

        <div>
          <Label>Creator Name</Label>
          <Input
            type="text"
            name="creator"
            value={user?.displayName}
            disabled
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-[#f95f35] text-base-content font-semibold rounded-xl shadow"
        >
          Create Event
        </button>
      </form>
    </Wrapper>
  );
};

export default CreateEvent;

const Wrapper = styled.div`
 
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
