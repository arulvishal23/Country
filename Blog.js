import React from "react";
import "./Blog.css";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Beautiful Countries to Visit",
      image: "https://picsum.photos/400/250?random=1",
      date: "June 8, 2026",
      description:
        "Explore some of the most beautiful countries around the world and discover their unique attractions."
    },
    {
      id: 2,
      title: "Understanding Country APIs",
      image: "https://picsum.photos/400/250?random=2",
      date: "June 7, 2026",
      description:
        "Learn how to use REST Countries API in React applications with practical examples."
    },
    {
      id: 3,
      title: "Most Populated Countries",
      image: "https://picsum.photos/400/250?random=3",
      date: "June 6, 2026",
      description:
        "A quick look at the world's most populated countries and interesting statistics."
    },
    {
      id: 4,
      title: "Country Flags and Their Meanings",
      image: "https://picsum.photos/400/250?random=4",
      date: "June 5, 2026",
      description:
        "Discover the stories and meanings behind famous national flags."
    }
  ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Our Blog</h1>
        <p>
          Latest articles, tutorials, and country information updates.
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <p className="blog-date">{blog.date}</p>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <button className="read-btn">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;