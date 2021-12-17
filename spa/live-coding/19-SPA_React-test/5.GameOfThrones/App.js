import React, { useState, useEffect } from 'react';
import './App.css';



const App = () => {
  const [bookNames, setBookNames ] = useState([])

  const getBooksData = async () => {
    const response = await fetch("https://anapioficeandfire.com/api/books")
    const data = await response.json()
    const bookNames = data.map( bookData => bookData.name)
    setBookNames(bookNames)
  }

  useEffect(getBooksData)

  const getBookList = () => {
    return bookNames.map((bookName, index ) => {
      return (
        <li
          key={index}
        >
          {bookName}
        </li>
      )
    })
  }
  
  return (
    <main>
      <h1>Game of Thrones Books</h1>
      <ul>
        {getBookList()}
      </ul>
    </main>
  )
}

export default App;


//  const a = [{
//   url: "https://anapioficeandfire.com/api/books/1",
//   name: "A Game of Thrones",
//   isbn: "978-0553103540",
//   authors: [ "George R. R. Martin" ],
//   characters: [
//     "https://anapioficeandfire.com/api/characters/2",
//     "https://anapioficeandfire.com/api/characters/12",
//     "https://anapioficeandfire.com/api/characters/13"
//   ],
//   country: "United States",
//   mediaType: "Hardcover",
//   name: "A Game of Thrones",
//   numberOfPages: 694,
//   povCharacters: Array(9) [
//     "https://anapioficeandfire.com/api/characters/148",
//     "https://anapioficeandfire.com/api/characters/208",
//     "https://anapioficeandfire.com/api/characters/232"
//   ],
//   publisher: "Bantam Books",
//   released: "1996-08-01T00:00:00"
// },
// ]