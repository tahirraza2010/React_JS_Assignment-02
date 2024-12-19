import React from "react";
// import "./App.css"

const Card = ({ title, tagline, price, imageUrl, isNew }) => {
  return (
    <div className="card-horizontal">
      <div className="card-content-section">
        {isNew && <span className="new-badge">NEW</span>}
        <h2 className="card-title">{title}</h2>
        <p className="card-tagline">{tagline}</p>
        {price && <p className="card-price">Rs.{price}</p>}
      </div>
      <div className="card-image-section">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
    </div>
  );
};

export default Card;
