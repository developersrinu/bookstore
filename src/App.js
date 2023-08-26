import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // You can define your styles in this file

function App() {
  const [initialBooks, setInitialBooks] = useState([]);

  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then((response) => {
        const firstThreeBooks = response.data.items.slice(0, 3);
        setInitialBooks(firstThreeBooks);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* Display your books */}
      </header>
    </div>
  );
}

export default App;







