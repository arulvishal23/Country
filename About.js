import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Country Explorer</h1>

        <p>
          Country Explorer is a modern React application that
          helps users discover detailed information about countries
          around the world using real-time data.
        </p>
      </section>

      {/* Mission & Vision */}

      <section className="about-grid">

        <div className="about-card">
          <h2>🎯 Our Mission</h2>

          <p>
            To provide accurate and easy-to-access country
            information for students, travelers, developers,
            and geography enthusiasts.
          </p>
        </div>

        <div className="about-card">
          <h2>🚀 Our Vision</h2>

          <p>
            To become a comprehensive platform where users
            can explore countries, maps, news, weather,
            and statistics in one place.
          </p>
        </div>

      </section>

      {/* Features */}

      <section className="features-section">

        <h2>✨ Key Features</h2>

        <div className="features-grid">

          <div className="feature-box">
            🌍 Country Information
          </div>

          <div className="feature-box">
            🔎 Smart Search
          </div>

          <div className="feature-box">
            📍 Interactive Maps
          </div>

          <div className="feature-box">
            📰 Country News
          </div>

          <div className="feature-box">
            📊 Statistics Dashboard
          </div>

          <div className="feature-box">
            🔐 Secure Login
          </div>

        </div>

      </section>

      {/* Technologies */}

      <section className="tech-section">

        <h2>💻 Technologies Used</h2>

        <div className="tech-grid">

          <div className="tech-card">React.js</div>
          <div className="tech-card">React Router</div>
          <div className="tech-card">REST Countries API</div>
          <div className="tech-card">Axios</div>
          <div className="tech-card">CSS3</div>
          <div className="tech-card">JavaScript ES6</div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats-section">

        <div className="stat-box">
          <h1>250+</h1>
          <p>Countries</p>
        </div>

        <div className="stat-box">
          <h1>6</h1>
          <p>Continents</p>
        </div>

        <div className="stat-box">
          <h1>195</h1>
          <p>UN Members</p>
        </div>

        <div className="stat-box">
          <h1>99.9%</h1>
          <p>API Uptime</p>
        </div>

      </section>

    </div>
  );
}

export default About;