import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CountryNews.css";

function CountryNews({ countryName }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
       const response = await axios.get(
  `https://newsapi.org/v2/everything?q=${countryName}&sortBy=publishedAt&language=en&apiKey=fa1f67edfde4436b84175003d2efefb5`
);

        setNews(response.data.articles.slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, [countryName]);

  return (
    <div className="news-container">

      <h2>📰 Latest News From {countryName}</h2>

      <div className="news-grid">

        {news.map((article, index) => (
          <div className="news-card" key={index}>

            <img
              src={
                article.urlToImage ||
                "https://via.placeholder.com/400x200"
              }
              alt={article.title}
            />

            <div className="news-content">

              <h3>{article.title}</h3>

              <p>
                {article.description}
              </p>

              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
              >
                Read More →
              </a>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default CountryNews;