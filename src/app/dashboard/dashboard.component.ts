import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'dashboard-componenet',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    public sharedService: SharedService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  private loadBooks() {
    if (!this.sharedService.gBookList) {

      // Load the book list using service
      this.bookService.getBookList().subscribe((data) => {
        if (data) {
          this.sharedService.gBookList = data;
        }
      });
    }
  }
}
