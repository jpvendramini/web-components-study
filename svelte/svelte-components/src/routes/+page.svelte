<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import LabelComponent from "../components/atoms/LabelComponent.svelte";
  import TitleComponent from "../components/atoms/TitleComponent.svelte";
  import BookItemComponent from "../components/molecules/BookItemComponent.svelte";
  import SearchInputComponent from "../components/molecules/SearchInputComponent.svelte";
  import SidebarComponent from "../components/molecules/SidebarComponent.svelte";

  /**
   * @type {any[]}
   */
  let recentBooks = [];
  /**
   * @type {any[]}
   */
  let searchedData = [];
  /**
   * @type {any}
   */
  let bookInfo;
  let searchedValue = "";
  let currentBookId = "";

  async function getBookDetails(bookId) {
    if (currentBookId !== bookId) {
      try {
        const response = await fetch(
          "https://www.dbooks.org/api/book/" + bookId
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        bookInfo = data;
        currentBookId = data.id;
      } catch (error) {
        console.error(error);
      }
    } else {
      bookInfo = null;
      currentBookId = "";
    }
  }

  function fetchData() {
    fetch("https://www.dbooks.org/api/recent")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "ok" && data.books && data.books.length > 0) {
          recentBooks = data.books.slice(0, 5);
        }
      });
  }

  /**
   * @param {string} query
   */
  function fetchSearchedData(query) {
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
            searchedData = data.books;
          } else {
            searchedData = [];
          }
        });
    } else {
      searchedData = [];
    }
  }

  onMount(() => {
    fetchData();
    fetchSearchedData("programming");
  });

  /**
   * @type {number | undefined}
   */
  let searchInputTimer;

  /**
   * @param {any} event
   */
  function handleSearchInputChange(event) {
    if (searchInputTimer) {
      clearTimeout(searchInputTimer);
    }

    searchInputTimer = setTimeout(() => {
      fetchSearchedData(event);
    }, 1000); // 1000 milliseconds (1 second)
  }
</script>

<div>
  <div class="container">
    <div>
      <TitleComponent text="Most recent books" />
      <LabelComponent
        text="Here you can visualize the most recently added books."
      />
    </div>
    <div class="books-container">
      {#each recentBooks as book (book.id)}
        <BookItemComponent
          title={book.title}
          label={book.authors}
          path={book.image}
          onClick={() => getBookDetails(book.id)}
        />
      {/each}
    </div>
    <div class="search-container">
      <div>
        <TitleComponent text="Search for books" />
        <LabelComponent
          text="Here you can search for books by author name or title."
        />
      </div>
      <div>
        <SearchInputComponent
          value={searchedValue}
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
    <div class="books-container">
      {#each searchedData as book (book.id)}
        <BookItemComponent
          title={book.title}
          label={book.authors}
          path={book.image}
          onClick={() => getBookDetails(book.id)}
        />
      {/each}
    </div>
  </div>
  <div>
    <SidebarComponent {bookInfo} />
  </div>
</div>
