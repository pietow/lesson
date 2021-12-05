import React,{useState} from 'react'
import booksMockData from '../mocks/books'
import BookList from './BookList'
import BookFilter from './BookFilter'



export default function Books() {

    const [books, setBooks] = useState(booksMockData)
    const [selectedFilter, setSelectedFilter] = useState('All')

    const selectFilter = (filter) => {
        setSelectedFilter(filter)
        setBooks(
          filter === 'All'
            ? booksMockData
            : booksMockData.filter((book) => book.category === filter)
        )
      }
    
      const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']
    
      const tabItems = filters.map((filter) => (
        <li
          className={filter === selectedFilter ? 'active' : ''}
          key={filter}
          onClick={() => selectFilter(filter)}
        >
          <a href="#0">{filter}</a>
        </li>
      ))
    
    return (
        <section id="books">
        <div className="container">
         <BookFilter tabItems={tabItems}/>
          <BookList books={books}/>
        </div>
      </section>
    )
}
