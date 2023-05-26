import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home | IT Bookstore'
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
    title: 'Book Details | IT Bookstore'
  },
  {
    path: 'wish-list',
    component: WishListComponent,
    title: 'Whishlist | IT Bookstore'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
