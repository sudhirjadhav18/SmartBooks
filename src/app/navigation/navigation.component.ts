import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {}

  resetFilter() {
    this.sharedService.bookFilter = '';
  }
}
