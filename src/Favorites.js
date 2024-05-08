import React from "react";
import BookCard from "./BookCard";

const Favorites = ({ favorites, toggleFavorite }) => {
  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="list">
        {favorites.map((book, i) => (
          <div key={i} className="book-wrapper">
            <BookCard
              image={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              published={book.volumeInfo.publishedDate}
              pages={book.volumeInfo.pageCount}
              toggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
