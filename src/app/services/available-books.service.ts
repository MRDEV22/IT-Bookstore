import { Injectable } from '@angular/core';
import { BookModel } from '../models/book-model';

@Injectable({
  providedIn: 'root'
})
export class AvailableBooksService {

  availableBooksList: BookModel[] = [];
  whishList: BookModel[] = [];

  constructor() {
    if(localStorage.getItem('available_books')){
      this.availableBooksList = JSON.parse(localStorage.getItem('available_books')!);
    }

    if(localStorage.getItem('wishlist')){
      this.whishList = JSON.parse(localStorage.getItem('wishlist')!);
    }
   }

  saveAvailableBooks(){
    localStorage.setItem('available_books', JSON.stringify(this.availableBooksList));
  }

  getAvailableBooks(){
    return this.availableBooksList;
  }

  saveWishList(){
    localStorage.setItem('wishlist', JSON.stringify(this.whishList));
  }

  getWishList(){
    return this.whishList;
  }

  removeItemAvailableBooks(key: number){
    this.availableBooksList.forEach((value, index) => {
      if (value.id == key) this.availableBooksList.splice(index, 1);
    });
  }

  removeItemWishlist(key: number){
    this.whishList.forEach((value, index) => {
      if (value.id == key) this.whishList.splice(index, 1);
    });
  }

}
