import React, { useState, useEffect } from 'react';
import Card from './Card';

const API_URL = 'https://6701aea0b52042b542d85885.mockapi.io/LIBROS';

const Body = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Body;
