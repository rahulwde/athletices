import React from 'react';
import styled from 'styled-components';
import { StyledSelect, Submit } from '../uverse';

const CreateEvent = () => {
  return (
    <div className="max-w-xl mx-auto p-6 my-5  rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Create New Athletic Event</h2>
      <form className="space-y-4">
        {/* Event Name */}
        <div>
          <label className="block text-gray-700 mb-1">Event Name</label>
          <StyledWrapper>
            <input
              type="text"
              placeholder="Enter event name"
              className="input"
            />
          </StyledWrapper>
        </div>

        {/* Event Type */}
     <div>
      <label className="block text-gray-700 mb-1">Event Type</label>
      <StyledSelect>
        <option value="">Select type</option>
        <option>Swimming</option>
        <option>Sprinting</option>
        <option>Long Jump</option>
        <option>High Jump</option>
        <option>Hurdle Race</option>
      </StyledSelect>
    </div>

        {/* Event Date */}
        <div>
          <label className="block text-gray-700 mb-1">Event Date</label>
          <StyledWrapper>
            <input
              type="date"
              className="input"
            />
          </StyledWrapper>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <StyledWrapper>
            <textarea
              placeholder="Write something about the event..."
              rows="4"
              className="input"
            ></textarea>
          </StyledWrapper>
        </div>

        {/* Creator Email */}
        <div>
          <label className="block text-gray-700 mb-1">Creator Email</label>
          <StyledWrapper>
            <input
              type="email"
              value="user@example.com"
              disabled
              className="input"
            />
          </StyledWrapper>
        </div>

        {/* Creator Name */}
        <div>
          <label className="block text-gray-700 mb-1">Creator Name</label>
          <StyledWrapper>
            <input
              type="text"
              value="John Doe"
              disabled
              className="input"
            />
          </StyledWrapper>
        </div>

        {/* Event Image URL */}
        <div>
          <label className="block text-gray-700 mb-1">Event Image URL</label>
          <StyledWrapper>
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
              className="input"
            />
          </StyledWrapper>
        </div>

        {/* Submit Button */}
        <Submit>
            <button className="button w-full flex justify-center" type='submit'> 
        <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
         Create Event
      </button>
        </Submit>
        
      </form>
    </div>
  );
};

const StyledWrapper = styled.div`
  .input {
    width: 100%;
    padding: 11px 23px;
    font-size: 16px;
    border-radius: 50px;
    border: 1px solid #353535;
    background: none;
    outline: none;
    color: #979797;
    box-shadow: rgb(136 136 136 / 17%) 0px -23px 25px 0px inset,
      rgb(81 81 81 / 23%) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px,
      rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px,
      rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;

export default CreateEvent;
