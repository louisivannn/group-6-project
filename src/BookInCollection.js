import React, { useState, useEffect } from "react";

const BookInCollection = (props) => {
  const [currentPage, setCurrentPage] = useState(props.currentPage || 1);

  const handlePageChange = (e) => {
    const page = parseInt(e.target.value);
    setCurrentPage(page);

    props.saveCurrentPage(props.title, page);
  };

  useEffect(() => {
    setCurrentPage(props.currentPage || 1);
  }, [props.currentPage]);

  return (
    <div className="card-container">
      <img src={props.image} alt="" />
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
        <label>
          Current Page:
          <input
            type="number"
            min="1"
            max={props.pages}
            value={currentPage}
            onChange={handlePageChange}
          />
        </label>
      </div>
      <button onClick={() => props.deleteBook(props)}>Remove Book</button>
    </div>
  );
};

export default BookInCollection;
