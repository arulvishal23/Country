import "./Profile.css";

function Profile() {
  const username = localStorage.getItem("username") || "Admin";

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-image">
          👤
        </div>

        <h1>{username}</h1>

        <p>Country Explorer Member</p>

        <div className="profile-stats">

          <div className="stat">
            <h2>250+</h2>
            <span>Countries</span>
          </div>

          <div className="stat">
            <h2>195</h2>
            <span>UN Members</span>
          </div>

          <div className="stat">
            <h2>6</h2>
            <span>Continents</span>
          </div>

        </div>

        <div className="profile-info">
          <p>🌍 Geography Explorer</p>
          <p>📍 World Traveler</p>
          <p>⭐ Premium User</p>
        </div>

      </div>

    </div>
  );
}

export default Profile;