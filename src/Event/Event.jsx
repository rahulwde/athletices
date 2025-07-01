import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import { StyledSearch, StyledWrapper } from "../uverse";
import { Helmet } from "react-helmet-async";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"

  // Fetch events from backend
  useEffect(() => {
    fetch("https://athletics-server.vercel.app/athletics/public/get")
      .then((res) => res.json())
      .then((data) => {
        const cleaned = data.map((ev) => ({
          title: ev.title || "",
          location: ev.location || "",
          type: ev.type || "",
          ...ev,
        }));
        setEvents(cleaned);
        setFilteredEvents(cleaned);
      });
  }, []);

  // Filter and sort events
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    let filtered = events.filter(
      (event) =>
        event?.title?.toLowerCase().includes(query) ||
        event?.location?.toLowerCase().includes(query) ||
        event?.type?.toLowerCase().includes(query)
    );

    // Apply sorting
    filtered = filtered.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return sortOrder === "asc"
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });

    setFilteredEvents(filtered);
  }, [searchQuery, events, sortOrder]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Helmet>
        <title>All Events - Athletics</title>
        <meta
          name="description"
          content="Browse and discover all athletic events around you."
        />
      </Helmet>

      <h1 className="text-3xl font-bold my-6 text-primary dark:text-[#ecfeff]">
        All Events
      </h1>

      {/* Search and Sort Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search Input */}
        <StyledSearch>
          <form className="form my-2" onSubmit={(e) => e.preventDefault()}>
            <button type="submit">
              <svg
                width={17}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              className="input"
              placeholder="Search your Event"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="reset"
              type="button"
              onClick={() => setSearchQuery("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </form>
        </StyledSearch>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-base">
            Sort by Title:
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered text-sm bg-base-100   text-base-content"
          >
            <option value="asc">Ascending (A-Z)</option>
            <option value="desc">Descending (Z-A)</option>
          </select>
        </div>
      </div>

      {/* All Event Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredEvents.length ? (
          filteredEvents.map((athletic) => (
            <EventCard athletic={athletic} key={athletic._id} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400 mt-6">
            No events found for "{searchQuery}"
          </p>
        )}
      </div>
    </div>
  );
};

export default Events;
