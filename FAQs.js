import { useState } from "react";
import "./FAQs.css";

function FAQs() {
  const faqData = [
    {
      title: "GENERAL",
      questions: [
        {
          q: "What is Country Explorer?",
          a: "Country Explorer provides information about countries using the REST Countries API."
        },
        {
          q: "Who runs the API?",
          a: "The application uses publicly available country data APIs."
        }
      ]
    },
    {
      title: "DATA & SOURCES",
      questions: [
        {
          q: "How accurate is the country data?",
          a: "The data comes from reliable international datasets."
        },
        {
          q: "Which country data does the API provide?",
          a: "Country name, capital, population, region, flag, languages and more."
        },
        {
          q: "Which countries are supported?",
          a: "Almost all recognized countries worldwide."
        }
      ]
    },
    {
      title: "API ACCESS & FEATURES",
      questions: [
        {
          q: "How do I get an API access key?",
          a: "No key is required for the REST Countries API."
        },
        {
          q: "What is an API request?",
          a: "A request is a call made to retrieve country information."
        },
        {
          q: "What is the API uptime?",
          a: "The service is generally available 24/7."
        }
      ]
    },
    {
      title: "PLANS, PRICING & PAYMENTS",
      questions: [
        {
          q: "What is the difference between free and paid plans?",
          a: "Paid plans usually provide more requests and premium features."
        },
        {
          q: "Can I pay yearly?",
          a: "Yes, yearly subscriptions often include discounts."
        }
      ]
    }
  ];

  const [open, setOpen] = useState(null);

  return (
    <div>
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>
          Most frequently asked questions about country data,
          API access, subscription plans and more.
        </p>
      </div>

      <div className="faq-container">
        {faqData.map((section, index) => (
          <div key={index} className="faq-section">
            <h2>{section.title}</h2>

            {section.questions.map((item, i) => {
              const id = `${index}-${i}`;

              return (
                <div key={id}>
                  <div
                    className="faq-question"
                    onClick={() =>
                      setOpen(open === id ? null : id)
                    }
                  >
                    <span>{item.q}</span>
                    <span>+</span>
                  </div>

                  {open === id && (
                    <div className="faq-answer">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;