<script>
  let recentBooks = [];
  let searchedBooks = [];
  let bookInfo = null;
  let searchQuery = "";
  let currentBookId = "";

  async function fetchData() {
    try {
      const response = await fetch("https://www.dbooks.org/api/recent");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.status === "ok" && data.books && data.books.length > 0) {
        recentBooks = data.books;
      }
    } catch (error) {
      console.error(error);
    }
  }

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

  async function fetchSearchedData(query) {
    if (query !== "") {
      try {
        const response = await fetch(
          "https://www.dbooks.org/api/search/" + query
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.status === "ok" && data.books && data.books.length > 0) {
          searchedBooks = data.books;
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  let searchInputTimer;

  function handleSearchInputChange(event) {
    searchQuery = event.target.value;
    // Clear previous timer, if it exists
    if (searchInputTimer) {
      clearTimeout(searchInputTimer);
    }

    // Set a new timer to fetch data after a delay
    searchInputTimer = setTimeout(() => {
      fetchSearchedData(event.target.value);
    }, 1000); // 1000 milliseconds (1 second)
  }

  // Fetch data on component mount
  fetchData();
  fetchSearchedData("programming");
</script>

<div class="container">
  <title-component text="Most recent books" />
  <label-component text="Here you can visualize the most recent added books." />

  <div class="books-container">
    {#each recentBooks.slice(0, 5) as book (book.id)}
      <book-item-component
        key={book.id}
        title={book.title}
        label={book.authors}
        path={book.image}
        on:click={() => getBookDetails(book.id)}
      />
    {/each}
  </div>

  <div class="search-container">
    <div>
      <title-component text="Search for books" />
      <label-component
        text="Here you can search your book of interest by the name of the author or book title."
      />
    </div>
    <div>
      <search-input-component
	  type="text" on:input={handleSearchInputChange} 
      />
    </div>
  </div>

  <div class="books-container">
    {#each searchedBooks as book (book.id)}
      <book-item-component
        key={book.id}
        title={book.title}
        label={book.authors}
        path={book.image}
        on:click={() => getBookDetails(book.id)}
      />
    {/each}
  </div>

  <sidebar-component {bookInfo} />
</div>
