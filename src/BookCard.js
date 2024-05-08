import React, { Component } from "react";

const BookCard = (props) => {
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
        <p>Pages: {props.pages}</p>
      </div>
    </div>
  );
};

export default BookCard;
