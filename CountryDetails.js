import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CountryNews from "./CountryNews";
import "./CountryDetails.css";

function CountryDetails() {
  const { code } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
      })
      .catch((err) => console.log(err));
  }, [code]);

  if (!country) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details-container">

      <div className="details-card">

        <img
          src={country.flags.png}
          alt={country.name.common}
          className="country-flag"
        />

        <div className="details-info">

          <h1>{country.name.common}</h1>

          <p><strong>Official Name:</strong> {country.name.official}</p>
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Sub Region:</strong> {country.subregion}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
          <p><strong>Country Code:</strong> {country.cca3}</p>
          <p><strong>Timezone:</strong> {country.timezones[0]}</p>

          <Link to="/countries">
            <button className="back-btn">
              ← Back
            </button>
          </Link>

        </div>

      </div>

      {/* MAP */}

      <div className="map-section">

        <h2>📍 Country Location</h2>

        <iframe
          title="country-map"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://maps.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}&z=5&output=embed`}
        ></iframe>
        <CountryNews
  countryName={country.name.common}
/>

      </div>

    </div>
  );
}

export default CountryDetails;