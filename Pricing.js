import React from "react";
import "./Pricing.css";

function Pricing() {
  const plans = [
    {
      name: "FREE",
      price: "₹0",
      description: "Perfect for beginners",
      features: [
        "100 Requests / Month",
        "Country Search",
        "Basic Support",
        "SSL Encryption"
      ]
    },
    {
      name: "BASIC",
      price: "₹49.99",
      description: "For small projects",
      features: [
        "1,000 Requests / Month",
        "Country Details",
        "Priority Support",
        "SSL Encryption"
      ]
    },
    {
      name: "PROFESSIONAL",
      price: "₹99.99",
      description: "For growing businesses",
      features: [
        "10,000 Requests / Month",
        "Advanced Search",
        "Premium Support",
        "SSL Encryption"
      ]
    },
    {
      name: "ENTERPRISE",
      price: "₹499.99",
      description: "Unlimited access",
      features: [
        "Unlimited Requests",
        "All Features",
        "24/7 Support",
        "SSL Encryption"
      ]
    }
  ];

  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>Fair Pricing For Any Country</h1>
        <p>Choose the plan that best fits your needs.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${
              plan.name === "PROFESSIONAL" ? "popular" : ""
            }`}
          >
            {plan.name === "PROFESSIONAL" && (
              <div className="popular-badge">
                MOST POPULAR
              </div>
            )}

            <h3>{plan.name}</h3>

            <h2>{plan.price}</h2>

            <p className="desc">
              {plan.description}
            </p>

            <ul>
              {plan.features.map((item, i) => (
                <li key={i}>✓ {item}</li>
              ))}
            </ul>

            <button>pay now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;