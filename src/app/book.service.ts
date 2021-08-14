import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksDbURL = './assets/booksDatabase.json';

  constructor(private http: HttpClient) {}

  public getBookList() {
    return this.http.get(this.booksDbURL);
  }
}
