
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "../build/bundle.js"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('bookItemComponent') bookItemComponent!: ElementRef;

  recentBooks: any[] = [];
  searchedBooks: any[] = [];
  sidebarBookInfo: any = null;

  private searchInputTimer: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Call the fetchData function when the page loads
    this.fetchData();
    this.fetchSearchedData("programming")
  }

  getBookDetails(bookId: string) {
    if (this.sidebarBookInfo && this.sidebarBookInfo.id === bookId) {
      // If the same book is clicked again, close the sidebar
      this.sidebarBookInfo = null;
    } else {
      // Fetch book details from the API
      this.http.get(`https://www.dbooks.org/api/book/${bookId}`)
        .subscribe((data: any) => {
          this.sidebarBookInfo = data;
        });
    }
  }

  fetchSearchedData(query: any) {
    if (query) {
      // Fetch searched data from the API
      this.http.get(`https://www.dbooks.org/api/search/${query}`)
        .subscribe((data: any) => {
          if (data.status === 'ok' && data.books && data.books.length > 0) {
            this.searchedBooks = data.books;
          } else {
            this.searchedBooks = [];
          }
        });
    } else {
      this.searchedBooks = [];
    }
  }

  fetchData() {
    // Fetch recent books from the API
    this.http.get('https://www.dbooks.org/api/recent')
      .subscribe((data: any) => {
        if (data.status === 'ok' && data.books && data.books.length > 0) {
          this.recentBooks = data.books.slice(0, 5);
        }
      });
  }

  handleSearchInputChange(event: any) {
    if (this.searchInputTimer) {
      clearTimeout(this.searchInputTimer);
    }

    // Set a new timer to fetch data after a delay
    this.searchInputTimer = setTimeout(() => {
      this.fetchSearchedData(event.target.value);
    }, 1000); // 1000 milliseconds (1 second)
  }
}
