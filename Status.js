import "./Status.css";

function Status() {
  const data = [
    {
      endpoint: "All Countries Endpoint",
      latency: "766.90 ms",
      availability: "99.90%",
      passRate: "99.90%",
      errorRate: "0.10%",
    },
    {
      endpoint: "Country Search by Alpha Code",
      latency: "561.94 ms",
      availability: "99.90%",
      passRate: "99.90%",
      errorRate: "0.10%",
    },
    {
      endpoint: "Country Search by Capital",
      latency: "559.70 ms",
      availability: "99.90%",
      passRate: "99.90%",
      errorRate: "0.10%",
    },
    {
      endpoint: "Country Search by Currency",
      latency: "581.19 ms",
      availability: "99.80%",
      passRate: "99.80%",
      errorRate: "0.20%",
    },
    {
      endpoint: "Country Search by Region",
      latency: "590.72 ms",
      availability: "99.95%",
      passRate: "99.95%",
      errorRate: "0.05%",
    },
  ];

  return (
    <div className="status-page">

      <div className="status-header">
        <h1>API Status</h1>
        <p>Real-time API performance insights</p>
      </div>

      <table className="status-table">
        <thead>
          <tr>
            <th>Endpoint</th>
            <th>Latency</th>
            <th>Availability</th>
            <th>Pass Rate</th>
            <th>Error Rate</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.endpoint}</td>
              <td>🟢 {item.latency}</td>
              <td>{item.availability}</td>
              <td>{item.passRate}</td>
              <td>{item.errorRate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="status-footer">
        <h3>
          Ready to get started? Sign up for your access key
          and start using the API today.
        </h3>

        <button>Explore Docs</button>
        <button>Get Free API Key</button>
      </div>

    </div>
  );
}

export default Status;