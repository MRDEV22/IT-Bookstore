import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppTitleService {

  static readonly APP_TITLE: string = 'IT Bookstore';

  constructor() { }

  getAppTitle(): string{
     return AppTitleService.APP_TITLE;
  }

}
