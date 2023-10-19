<template>
  <div class="container">
    <title-component text="Most recent books" />
    <label-component text="Here you can visualize the most recent added books." />

    <div class="books-container">
      <book-item-component
        v-for="book in recentBooks.slice(0, 5)"
        :key="book.id"
        :title="book.title"
        :label="book.authors"
        :path="book.image"
        @click="getBookDetails(book.id)"
      />
    </div>

    <div class="search-container">
      <div>
        <title-component text="Search for books" />
        <label-component
          text="Here you can search your book of interest by the name of the author or book title."
        />
      </div>
      <div>
        <search-input-component ref="searchInputRef" :value="searchQuery" @input="handleSearchInputChange" />
      </div>
    </div>

    <div class="books-container">
      <book-item-component
        v-for="book in searchedBooks"
        :key="book.id"
        :title="book.title"
        :label="book.authors"
        :path="book.image"
        @click="getBookDetails(book.id)"
      />
    </div>

    <sidebar-component :bookInfo="bookInfo" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      recentBooks: [],
      searchedBooks: [],
      bookInfo: null,
      searchQuery: '',
      currentBookId: '',
    };
  },
  mounted() {
    this.fetchData();
    this.fetchSearchedData("programming");
    const searchInput = this.$refs.searchInputRef;
    searchInput.addEventListener("change", this.handleSearchInputChange);
  },
  methods: {
    fetchData() {
      fetch("https://www.dbooks.org/api/recent")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.status === "ok" && data.books && data.books.length > 0) {
            this.recentBooks = data.books;
          }
        });
    },
    getBookDetails(bookId) {
      if (this.currentBookId !== bookId) {
        fetch("https://www.dbooks.org/api/book/" + bookId)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            this.bookInfo = data;
            this.currentBookId = data.id;
          });
      } else {
        this.bookInfo = null;
        this.currentBookId = '';
      }
    },
    fetchSearchedData(query) {
      if (query !== "") {
        fetch("https://www.dbooks.org/api/search/" + query)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            if (data.status === "ok" && data.books && data.books.length > 0) {
              this.searchedBooks = data.books;
            }
          });
      }
    },
    handleSearchInputChange(event) {
      this.searchQuery = event.target.value;

      console.log(event.target.value);
      // Clear previous timer, if it exists
      if (this.searchInputTimer) {
        clearTimeout(this.searchInputTimer);
      }

      // Set a new timer to fetch data after a delay
      this.searchInputTimer = setTimeout(() => {
        this.fetchSearchedData(event.target.value);
      }, 1000); // 1000 milliseconds (1 second)
    },
  },
};
</script>
