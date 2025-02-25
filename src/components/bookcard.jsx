import React from "react";
import "./bookcard.css"; 

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <h2 className="book-title">{name}</h2>
      <p className="book-genre">Genre: {genre}</p>
      <p className="book-author">Author: {author}</p>
    </div>
  );
};

export default BookCard;
