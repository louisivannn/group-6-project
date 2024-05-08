import React from "react";
import BookCard from "./BookCard";

const Library = (props) => {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return (
          <div key={i} className="book-wrapper">
            <BookCard
              image={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              published={book.volumeInfo.publishedDate}
              pages={book.volumeInfo.pageCount}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Library;
