// import styles from 
import { useState } from "react"
import BookCard from "../../components/BookCard/BookCard"
import style from './Books.module.css'
export default function Books() {
    const [books, setBooks] = useState([
        {
          title: "The Enigma Chronicles",
          description: "A thrilling mystery novel that follows a detective's journey to unravel a series of cryptic crimes that lead to an unexpected twist.",
          cover_link: "https://cdn.pixabay.com/photo/2023/11/15/15/04/leaves-8390274_1280.jpg"
        },
        {
          title: "Echoes of Eternity",
          description: "An epic fantasy adventure set in a magical realm, where a young hero embarks on a quest to save the world from an ancient evil.",
          cover_link: "https://cdn.pixabay.com/photo/2023/11/14/19/29/bird-8388377_1280.jpg"
        },
        {
          title: "Quantum Quandaries",
          description: "Explore the mind-bending world of quantum physics in this thought-provoking science fiction novel that challenges the boundaries of reality.",
          cover_link: "https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg"
        },
        {
          title: "Serendipity's Song",
          description: "A heartwarming tale of love and destiny, where two souls find each other against all odds, guided by the whims of serendipity.",
          cover_link: "https://cdn.pixabay.com/photo/2017/02/26/21/39/rose-2101475_1280.jpg"
        },
        {
          title: "The Art of Innovation",
          description: "Unleash your creativity and discover the secrets of groundbreaking innovation with this inspiring guide from a renowned industry expert.",
          cover_link: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
        }
      ])

      const [book, setBook] = useState({
        title: '',
        description: '',
        cover_link: ''
      })

      const handleSubmit = (e) => {
        e.preventDefault();
        setBooks((prevBooks) => {
          return [...prevBooks, {...book}]  
        })
        setBook({
          title: '',
          description: '',
          cover_link: ''
        })
      }

      const handleChange = (e) => {
        setBook((prevBook) => {
          return {
            ...prevBook,
            [e.target.name]: e.target.value
          }
        })
      }

    return (
        <>
            <h1>My Books List</h1>
            <section className={style.booksComp}>
                {books.map((book, index) => {
                    return (
                        <BookCard
                        key={`${book.title}_${index}`}
                        title={book.title}
                        description={book.description}
                        cover_link={book.cover_link}
                        />
                    )
                })};
                
            </section>
            <h1>Add a New Book:</h1>
            <form onSubmit={handleSubmit}>
                  <label htmlFor="title">Title</label>
                  <input type="text" name='title' onChange={handleChange} value={book.title}/>

                  <label htmlFor="description">Description</label>
                  <input type="text" name='description' onChange={handleChange} value={book.description}/>

                  <label htmlFor="cover_link">Cover</label>
                  <input type="text" name='cover_link' onChange={handleChange} value={book.cover_link}/>
                  <button type="submit">Submit Book</button>
                </form>
        </>
        
    )
}