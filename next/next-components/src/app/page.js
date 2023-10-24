"use client";
import LabelComponent from "@/components/atoms/label";
import TitleComponent from "@/components/atoms/title";
import BookItemComponent from "@/components/molecules/bookItems";
import SearchInputComponent from "@/components/molecules/searchInput";
import SidebarComponent from "@/components/molecules/sidebar";
import { useEffect, useState } from "react";

export default function Home() {
  const [recentBooks, setRecentBooks] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [bookInfo, setBookInfo] = useState();
  const [searchedValue, setSearchedValue] = useState("");
  const [currentBookId, setCurrentBookId] = useState("");

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
          setCurrentBookId(data.id);
          setBookInfo(data);
        });
    } else {
      setBookInfo(null);
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
      fetchSearchedData(event);
    }, 1000); // 3000 milliseconds (3 seconds)
  }

  return (
    <div>
      <div className="container">
        <div>
          <TitleComponent text="Most recent books" />
          <LabelComponent text="Here you can visualize the most recent added books." />
        </div>
        <div className="books-container">
          {recentBooks.map((book) => (
            <BookItemComponent
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
            <TitleComponent text="Search for books" />
            <LabelComponent text="Here you can search your book of interest by the name of the author or book title." />
          </div>
          <div>
            <SearchInputComponent
              value={searchedValue}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
        <div className="books-container">
          {searchedData.map((book) => (
            <BookItemComponent
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
        <SidebarComponent bookInfo={bookInfo} />
      </div>
    </div>
  );
}
