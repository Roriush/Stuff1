import React from 'react';

const Card = ({ book }) => {
  return (
    <div className="card">
      <img src={book.image} alt={book.name} />
      <h2>{book.name}</h2>
      <p>By {book.author}</p>
      <p>Price: ${book.price}</p>
    </div>
  );
};

export default Card;
