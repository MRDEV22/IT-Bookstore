import { Component, OnInit } from '@angular/core';

import { AppTitleService } from 'src/app/services/app-title.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public appTitleService: AppTitleService
  ) { }

  ngOnInit(): void {
    this.appTitleService.getAppTitle();
  }

}
