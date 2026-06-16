import React, { useState } from "react";
import "./TouristPlaces.css";

function TouristPlaces() {
  const [search, setSearch] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);

  const touristData = {
    india: [
      {
        name: "Taj Mahal",
        image:
          "https://images.unsplash.com/photo-1564507592333-c60657eea523",
        description: "One of the Seven Wonders of the World."
      },
      {
        name: "Goa Beach",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        description: "Famous for beaches and nightlife."
      },
      {
        name: "Meenakshi Temple",
        image:
          "https://images.unsplash.com/photo-1587474260584-136574528ed5",
        description: "Historic temple in Madurai."
      }
    ],

    france: [
      {
        name: "Eiffel Tower",
        image:
          "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
        description: "The symbol of Paris."
      },
      {
        name: "Louvre Museum",
        image:
          "https://images.unsplash.com/photo-1565967511849-76a60a516170",
        description: "World's largest art museum."
      }
    ],

    japan: [
      {
        name: "Mount Fuji",
        image:
          "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
        description: "Japan's iconic mountain."
      },
      {
        name: "Tokyo Tower",
        image:
          "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        description: "Famous landmark in Tokyo."
      }
    ],

    usa: [
      {
        name: "Statue of Liberty",
        image:
          "https://images.unsplash.com/photo-1546436836-07a91091f160",
        description: "Symbol of freedom."
      },
      {
        name: "Grand Canyon",
        image:
          "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722",
        description: "One of the world's natural wonders."
      }
    ],
    germany: [
  {
    name: "Brandenburg Gate",
    image: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0",
    description: "Historic landmark in Berlin."
  },
  {
    name: "Neuschwanstein Castle",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    description: "Famous fairytale castle."
  }
],

australia: [
  {
    name: "Sydney Opera House",
    image: "https://images.unsplash.com/photo-1523428096881-5bd79d043006",
    description: "World-famous performing arts center."
  }
],

canada: [
  {
    name: "Niagara Falls",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    description: "One of the most famous waterfalls."
  }
]
  };

  const places =
    touristData[search.toLowerCase()] || [];

  return (
    <div className="tourist-page">

      <div className="tourist-header">
        <h1>🌍 Tourist Places Explorer</h1>

        <input
          type="text"
          placeholder="Search Country..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search-box"
        />
      </div>

      {search && places.length === 0 ? (
        <h2 className="not-found">
          No tourist places found
        </h2>
      ) : (
        <div className="tourist-grid">
          {places.map((place, index) => (
            <div
  className="tourist-card"
  onClick={() => setSelectedPlace(place)}
>
              <img
                src={place.image}
                alt={place.name}
              />

              <div className="tourist-content">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {selectedPlace && (
  <div
    className="modal-overlay"
    onClick={() => setSelectedPlace(null)}
  >
    <div
      className="modal"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={selectedPlace.image}
        alt={selectedPlace.name}
      />

      <h2>{selectedPlace.name}</h2>

      <p>{selectedPlace.description}</p>

      <button
        onClick={() => setSelectedPlace(null)}
      >
        Close
      </button>
    </div>
  </div>
)}
      

    </div>
  );
}

export default TouristPlaces;