import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Countries.css";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,cca3"
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const sorted = [...data].sort((a, b) =>
            (a?.name?.common || "").localeCompare(
              b?.name?.common || ""
            )
          );

          setCountries(sorted);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredCountries = countries.filter((country) => {
    const name = country?.name?.common?.toLowerCase() || "";
    const capital = country?.capital?.[0]?.toLowerCase() || "";

    return (
      name.includes(search.toLowerCase()) ||
      capital.includes(search.toLowerCase())
    );
  });

  return (
    <div className="countries-page">

      <div className="country-header">
        <h1>🌍 Explore All Countries</h1>
        <p>
          Discover countries, capitals, populations and more
        </p>
      </div>

      <div className="filter-box">
        <div className="search-group">
          <input
            type="text"
            placeholder="🔍 Search by country or capital..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <p className="country-count">
        Showing {filteredCountries.length} Countries
      </p>

      <div className="countries-grid">

        {filteredCountries.map((country) => (
          <div
            className="country-card"
            key={country.cca3}
          >
            <img
              src={country.flags?.png}
              alt={country.name?.common}
            />

            <div className="country-content">

              <span className="region-tag">
                {country.region}
              </span>

              <h3>{country.name?.common}</h3>

              <p>
                📍 Capital:{" "}
                {country.capital?.[0] || "N/A"}
              </p>

              <p>
                👥 Population:{" "}
                {country.population?.toLocaleString()}
              </p>

              <Link
                to={`/country/${country.cca3}`}
                className="details-btn"
              >
                View Details →
              </Link>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Countries;