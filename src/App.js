import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Book from './components/Book';

function App() {
  // State to hold the initial book data f

  const [initialBooks, setInitialBooks] = useState([]);

  // Fetch initial book data when the component mounts
  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then((response) => {
        // Extract the first three books from the API response
        const firstThreeBooks = response.data.items.slice(0, 3);
        // Set the initial book data in the state
        setInitialBooks(firstThreeBooks);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* Display the list of books */}
        <div className="books">
          {initialBooks.map((book, index) => (
            // Render the Book component for each book
            <Book key={index} book={book} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;






