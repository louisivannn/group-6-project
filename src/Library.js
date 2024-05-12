import React from "react";
import BookCard from "./BookCard";
import Favorites from "./Favorites";

const Library = ({ books, toggleFavorite, favorites }) => {
  return (
    <div>
      <div className="list">
        {books.map((book, i) => {
          return (
            <div key={i} className="book-wrapper">
              <BookCard
                image={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                published={book.volumeInfo.publishedDate}
                pages={book.volumeInfo.pageCount}
                description={book.volumeInfo.description}
                toggleFavorite={toggleFavorite}
                isFavorite={favorites.some(
                  (fav) => fav.volumeInfo.title === book.volumeInfo.title
                )}
              />
            </div>
          );
        })}
      </div>
      <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default Library;
