<template>
  <div>
    <div class="container">
      <div>
        <TitleComponent :text="'Most recent books'" />
        <LabelComponent
          text="Here you can visualize the most recent added books."
        />
      </div>
      <div class="books-container">
        <BookItemComponent
          v-for="book in recentBooks"
          :key="book.id"
          :title="book.title"
          :label="book.authors"
          :path="book.image"
          @click="getBookDetails(book.id)"
        />
      </div>
      <div class="search-container">
        <div>
          <TitleComponent :text="'Search for books'" />
          <LabelComponent
            text="Here you can search your book of interest by the name of the author or book title."
          />
        </div>
        <div>
          <SearchInputComponent
            :value="searchedValue"
            @change="handleSearchInputChange"
          />
        </div>
      </div>
      <div class="books-container">
        <BookItemComponent
          v-for="book in searchedData"
          :key="book.id"
          :title="book.title"
          :label="book.authors"
          :path="book.image"
          @click="getBookDetails(book.id)"
        />
      </div>
    </div>
    <div>
      <SidebarComponent :bookInfo="bookInfo" />
    </div>
  </div>
</template>

<script>
import LabelComponent from "./components/atoms/Label.vue";
import TitleComponent from "./components/atoms/title.vue";
import BookItemComponent from "./components/molecules/BookItem.vue";
import SearchInputComponent from "./components/molecules/SearchInput.vue";
import SidebarComponent from "./components/molecules/Sidebar.vue";

export default {
  components:{
    LabelComponent,
    TitleComponent, 
    BookItemComponent,
    SearchInputComponent,
    SidebarComponent
  },
  data() {
    return {
      recentBooks: [],
      searchedData: [],
      bookInfo: null,
      searchedValue: "",
      currentBookId: "",
    };
  },
  created() {
    this.fetchData();
    this.fetchSearchedData("programming");
  },
  methods: {
    getBookDetails(bookId) {
      if (this.currentBookId !== bookId) {
        fetch(`https://www.dbooks.org/api/book/${bookId}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            this.currentBookId = data.id;
            this.bookInfo = data;
          });
      } else {
        this.bookInfo = null;
        this.currentBookId = "";
      }
    },
    fetchSearchedData(query) {
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
              this.searchedData = data.books;
            } else {
              this.searchedData = [];
            }
          });
      } else {
        this.searchedData = [];
      }
    },
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
            this.recentBooks = data.books.slice(0, 5);
          }
        });
    },
    handleSearchInputChange(event) {
      if (this.searchInputTimer) {
        clearTimeout(this.searchInputTimer);
      }

      this.searchInputTimer = setTimeout(() => {
        this.fetchSearchedData(event);
      }, 1000);
    },
  },
};
</script>
