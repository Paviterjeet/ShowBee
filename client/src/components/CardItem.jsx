// CardItem.jsx
import React from "react";

const CardItem = ({ image, title, text, link }) => {
  return (
    <div className="card shadow-sm">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CardItem;
