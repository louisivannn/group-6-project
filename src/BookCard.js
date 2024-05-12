import React, { Component, useState } from "react";

const BookCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card-container">
      {props.image ? (
        <img src={props.image} alt="" />
      ) : (
        <div className="no-image">
          <p>No image available</p>
        </div>
      )}
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>Author(s): {props.author}</h3>
        <p>
          Published Date:{" "}
          {props.published === "0000"
            ? "Not Available"
            : props.published.substring(0, 4)}
        </p>
        {showDetails && (
          <>
            <p>
              {props.genre === undefined
                ? ""
                : props.genre === ""
                ? ""
                : "Genre(s): " + props.genre}
            </p>
            <p>
              {props.description === undefined
                ? "Description Not Available"
                : props.description === ""
                ? "Description Not Available"
                : "Description: " + props.description}
            </p>
          </>
        )}

        <p>Pages: {props.pages}</p>

        <button onClick={toggleDetails}>
          {showDetails ? "Show Less Details" : "Read More Details"}
        </button>
        <button onClick={() => props.toggleFavorite(props.title)}>
          {props.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
