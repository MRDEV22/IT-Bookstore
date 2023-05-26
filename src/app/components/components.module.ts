import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { BooksListComponent } from './books-list/books-list.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BooksListComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    BooksListComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
