import { Component } from '@angular/core';

import { AppTitleService } from './services/app-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public appTitle: string = '';

  constructor(
    public appTitleService: AppTitleService,
  ){}

  ngOnInit(): void {
    this.appTitle = this.appTitleService.getAppTitle();

  }
}
