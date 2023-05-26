import { Component, OnInit } from '@angular/core';
import { AppTitleService } from 'src/app/services/app-title.service';
import { OnlineStatusService } from 'ngx-online-status';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public appTitleService: AppTitleService,
    public onlineStatusService: OnlineStatusService
  ) { }

  ngOnInit(): void {
    this.appTitleService.getAppTitle();

    this.onlineStatusService.getStatus()
  }

}


