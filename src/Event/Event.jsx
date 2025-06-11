import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { StyledSearch, StyledWrapper } from '../uverse';
import { IoMdLogIn } from 'react-icons/io';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/athletics')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setFilteredEvents(data);
      });
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = events.filter(event =>
      event.title.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query) ||
      event.type.toLowerCase().includes(query)
    );
    setFilteredEvents(filtered);
  }, [searchQuery, events]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold my-6">All Events</h1>
      
       <div className='flex '>
         <StyledSearch>
      <form className="form my-5 ">
        <button >
          <svg width={17} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <input className="input" placeholder="Search your Event" required type="text"    value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>
        <button className="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </form>
    </StyledSearch>
   <StyledWrapper>
              <button className="button ">
                <div className="blob1" />
                <div className="blob2" />
                <div className="inner flex gap-3 items-center justify-center text-2xl" type="submit">Search 
        </div>
              </button>
            </StyledWrapper>

       </div>
      
       

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(athletic => <EventCard athletic={athletic} key={athletic._id}></EventCard>)}
      </div>
    </div>
  );
};

export default Events;
