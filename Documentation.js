import "./Documentation.css";

function Documentation() {
  return (
    <div className="docs-container">

      <div className="docs-header">
        <h1>📚 Documentation</h1>
        <p>
          Complete guide to using the Country Explorer Application.
        </p>
      </div>

      <div className="docs-grid">

        <div className="doc-card">
          <h2>🌍 Country Explorer</h2>
          <p>
            Country Explorer is a React-based web application that
            provides detailed information about countries around the world.
          </p>
        </div>

        <div className="doc-card">
          <h2>🔍 Search Countries</h2>
          <p>
            Search countries instantly using country name,
            capital city, or country code.
          </p>
        </div>

        <div className="doc-card">
          <h2>📄 Country Details</h2>
          <p>
            View complete country information including:
          </p>

          <ul>
            <li>Country Flag</li>
            <li>Capital City</li>
            <li>Population</li>
            <li>Region</li>
            <li>Sub Region</li>
            <li>Area</li>
            <li>Timezone</li>
          </ul>
        </div>

        <div className="doc-card">
          <h2>⚡ REST Countries API</h2>
          <p>
            Data is fetched from the REST Countries API to provide
            real-time country information.
          </p>
        </div>

        <div className="doc-card">
          <h2>🛣 Routing</h2>

          <ul>
            <li>/home</li>
            <li>/countries</li>
            <li>/country/:code</li>
            <li>/pricing</li>
            <li>/documentation</li>
            <li>/blog</li>
            <li>/about</li>
          </ul>
        </div>

        <div className="doc-card">
          <h2>🔒 Authentication</h2>
          <p>
            Protected routes are implemented using a login page
            and localStorage authentication.
          </p>
        </div>

        <div className="doc-card">
          <h2>🖥 Technologies Used</h2>

          <ul>
            <li>React JS</li>
            <li>React Router DOM</li>
            <li>Axios</li>
            <li>REST Countries API</li>
            <li>CSS3</li>
          </ul>
        </div>

        <div className="doc-card">
          <h2>📱 Responsive Design</h2>
          <p>
            Fully responsive interface that works across
            Desktop, Tablet and Mobile devices.
          </p>
        </div>

      </div>

      

    </div>
  );
}

export default Documentation;