import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public gBookList: any;
  public bookFilter: any = '';
  constructor() {}
}
