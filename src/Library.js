import React, { useState } from "react";
import BookCard from "./BookCard";
import Favorites from "./Favorites";

const Library = ({ books, toggleFavorite, favorites }) => {
  const [currentPageByTitle, setCurrentPageByTitle] = useState({});
  const [showFavorites, setShowFavorites] = useState(false);

  const saveCurrentPage = (title, page) => {
    setCurrentPageByTitle({ ...currentPageByTitle, [title]: page });
  };

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
                genre={book.volumeInfo.categories}
                toggleFavorite={toggleFavorite}
                isFavorite={favorites.some(
                  (fav) => fav.volumeInfo.title === book.volumeInfo.title
                )}
                currentPage={currentPageByTitle[book.volumeInfo.title] || 1}
                saveCurrentPage={saveCurrentPage}
              />
            </div>
          );
        })}
      </div>
      {showFavorites && (
        <Favorites
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          saveCurrentPage={saveCurrentPage}
          currentPageByTitle={currentPageByTitle}
        />
      )}
      <button onClick={() => setShowFavorites(!showFavorites)}>
        {showFavorites ? "Hide Favorites" : "Show Favorites"}
      </button>
    </div>
  );
};

export default Library;
