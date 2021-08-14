import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookInfoComponent } from '../book-info/book-info.component';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book: any;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  public openBook() {
    const modalRef = this.modalService.open(BookInfoComponent, { size: 'lg' });
    modalRef.componentInstance.book = this.book;
  }
}
