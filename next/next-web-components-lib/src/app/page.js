"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

const Home = () => {
  const [currentBookId, setCurrentBookId] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [recentBooks, setRecentBooks] = useState([]);

  useEffect(() => {
    fetchData();
    fetchSearchedData("programming");
  }, []);


  const getBookDetails = (bookId) => {
    if (currentBookId !== bookId) {
      fetch(`https://www.dbooks.org/api/book/${bookId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const sidebar = document.querySelector("sidebar-component");
          console.log(data);
          // Update state or component as needed with book details
          setCurrentBookId(data.id);
          sidebar.bookInfo = data;
        });
    } else {
      const sidebar = document.querySelector("sidebar-component");
      sidebar.bookInfo = null;
      // Clear book details or update component as needed
      setCurrentBookId("");
    }
  };

  const fetchSearchedData = (query) => {
    if (query) {
      fetch(`https://www.dbooks.org/api/search/${query}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.status === "ok" && data.books && data.books.length > 0) {
            setSearchedData(data.books);
          } else {
            setSearchedData([]);
          }
        });
    } else {
      setSearchedData([]);
    }
  };

  const fetchData = () => {
    fetch("https://www.dbooks.org/api/recent")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "ok" && data.books && data.books.length > 0) {
          setRecentBooks(data.books.slice(0, 5));
        }
      });
  };

  let searchInputTimer;

  function handleSearchInputChange(event) {
    // Clear the previous timer, if it exists
    if (searchInputTimer) {
      clearTimeout(searchInputTimer);
    }

    // Set a new timer to log the value after 3 seconds with no changes
    searchInputTimer = setTimeout(() => {
      fetchSearchedData(event)
    }, 1000); // 3000 milliseconds (3 seconds)
  }

  useEffect(() => {
    const searchInput = document.querySelector("search-input-component");
        
    searchInput.onChange = handleSearchInputChange;
  },[])

  return (
    <div>
      <Script src="/build/bundle.js" type="module"/>
      <style jsx>{`
        .books-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          row-gap: 20px;
          margin-bottom: 40px;
        }
        .container {
          padding: 50px;
          max-width: 57.375rem;
          margin-right: 22.625rem;
        }
        .search-container {
          display: flex;
          align-items: end;
          justify-content: space-between;
          margin-bottom: 20px;
        }
      `}</style>
      <div className="container">
        <div>
          <title-component text="Most recent books" />
          <label-component text="Here you can visualize the most recent added books." />
        </div>
        <div className="books-container">
          {recentBooks.map((book) => (
            <book-item-component
              key={book.id}
              title={book.title}
              label={book.authors}
              path={book.image}
              onClick={() => getBookDetails(book.id)}
            />
          ))}
        </div>
        <div className="search-container">
          <div>
            <title-component text="Search for books" />
            <label-component text="Here you can search your book of interest by the name of the author or book title." />
          </div>
          <div>
            <search-input-component value="initial value"/>
          </div>
        </div>
        <div className="books-container">
          {searchedData.map((book) => (
            <book-item-component
              key={book.id}
              title={book.title}
              label={book.authors}
              path={book.image}
              onClick={() => getBookDetails(book.id)}
            />
          ))}
        </div>
      </div>
      <div>
        <sidebar-component />
      </div>
    </div>
  );
};

export default Home;
