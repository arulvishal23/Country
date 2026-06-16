import './Home.css';
function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="welcome-badge">
          ✈️ Explore Countries • Tourism • Food • Culture
        </div>

        <h1>Discover The World</h1>

        <p>
          Explore over 250 countries with detailed information,
          tourist attractions, famous foods, maps and news.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search Countries..."
          />
        </div>

      </section>

      <section className="stats">

        <div className="stat-card">
          <h2>250+</h2>
          <p>Countries</p>
        </div>

        <div className="stat-card">
          <h2>195+</h2>
          <p>UN Members</p>
        </div>

        <div className="stat-card">
          <h2>7</h2>
          <p>Continents</p>
        </div>

        <div className="stat-card">
          <h2>1000+</h2>
          <p>Tourist Places</p>
        </div>

      </section>
<section className="features">

  <h2 className="features-title">
    Why Choose Country Explorer?
  </h2>

  <div className="feature-grid">

    <div className="feature-card">
      <h3>🌍 Country Details</h3>
      <p>
        Explore complete information about every country.
      </p>
    </div>

    <div className="feature-card">
      <h3>🏛 Tourist Places</h3>
      <p>
        Discover famous attractions around the world.
      </p>
    </div>

    <div className="feature-card">
      <h3>🍜 Famous Foods</h3>
      <p>
        Learn about traditional foods of each country.
      </p>
    </div>

    <div className="feature-card">
      <h3>📰 Latest News</h3>
      <p>
        Stay updated with country-specific news.
      </p>
    </div>

  </div>

</section>
<div className='explore'>
<h1>Explore The World With One Click</h1>

<p>
  Discover countries, capitals, cultures, tourist attractions,
  famous foods, maps, weather updates and latest news from
  around the globe.
</p>
</div>
    </div>
  );
}

export default Home;