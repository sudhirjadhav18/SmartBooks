import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
})
export class BookInfoComponent implements OnInit {
  public book: any;
  public bookComment: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.book.Views = +this.book.Views + 1;
  }

  addComment() {
    if (this.bookComment) {
      if (!this.book.Comments) {
        this.book.Comments = [];
      }

      this.book.Comments.push(this.bookComment);

      this.bookComment = '';
    }
  }
}
