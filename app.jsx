import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://6701aea0b52042b542d85885.mockapi.io/LIBROS');
        setBooks(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.titulo}</h2>
          <p>By {book.autor}</p>
          <p>Price: ${book.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
