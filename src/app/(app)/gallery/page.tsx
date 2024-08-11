"use client";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images, CustomImage } from "./images";
import "./globals.css";

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

export default function App() {
  const [index, setIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleClick = (index: number, item: CustomImage) => setIndex(index);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleEventChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEvent(event.target.value);
  };

  const filteredImages = images.filter((image) => {
    const searchTermLower = searchTerm.toLowerCase();
    const eventNameMatch = selectedEvent
      ? image.eventName === selectedEvent
      : true;
    const searchMatch = image.eventName
      ?.toLowerCase()
      .includes(searchTermLower);

    return eventNameMatch && searchMatch;
  });
  console.log(filteredImages);
  const filteredSlides = filteredImages.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

  const uniqueEventNames = Array.from(
    new Set(images.map((image) => image.eventName))
  );

  return (
    <>
      <div className="head">
        <div className="text-center header">
          <span>G</span>
          <span className="samkaran">allery</span>
        </div>
        <form className="flex items-center w-full mx-auto mb-2 pl-0.5 pr-1">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="block w-full ps-10 p-2.5"
              placeholder="Search events..."
              required
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button
            type="submit"
            className="button p-2.5 ms-2 text-sm font-medium text-white"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <div className="mb-4 pr-1">
          <select
            value={selectedEvent}
            onChange={handleEventChange}
            className="p-2 w-full rounded-md"
          >
            <option value="">All Events</option>
            {uniqueEventNames.map((eventName) => (
              <option key={eventName} value={eventName}>
                {eventName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="p-2 rounded-md mb-2">
        {filteredImages.length > 0 ? (
          <>
            <Gallery
              images={filteredImages}
              onClick={handleClick}
              enableImageSelection={false}
            />
            <Lightbox
              slides={filteredSlides}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
            />
          </>
        ) : (
          <p className="text-center text-gray-500">No images found.</p>
        )}
      </div>
    </>
  );
}
