import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';

import { ComponentsModule } from '../components/components.module';
import { WishListComponent } from './wish-list/wish-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { OnlineStatusModule } from 'ngx-online-status';



@NgModule({
  declarations: [
    HomeComponent,
    BookDetailsComponent,
    WishListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgbRating,
    OnlineStatusModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
