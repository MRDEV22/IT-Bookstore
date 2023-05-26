import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book-model';

import { AvailableBooksService } from '../../services/available-books.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  public wishList: BookModel[] = []

  constructor(
    private availableBooksService: AvailableBooksService
  ) { }

  ngOnInit(): void {
    this.wishList = this.availableBooksService.getWishList();
    console.log(this.wishList);
  }

  onHeartClick(book: BookModel){
    var objIndex = this.availableBooksService.whishList.findIndex((obj => obj.isbn13 == book.isbn13));
    this.availableBooksService.whishList[objIndex].inWishList = false;

    //add to availablebooks list
    let index = this.availableBooksService.availableBooksList.length + 1;
    this.availableBooksService.availableBooksList.splice(index,0,book);
    this.availableBooksService.availableBooksList.join();

    // sort availablebokslist
    this.availableBooksService.availableBooksList.sort((a,b)=>a.id-b.id);
    this.availableBooksService.saveAvailableBooks();

    //remove from wishlist
    this.availableBooksService.removeItemWishlist(this.availableBooksService.whishList[objIndex].id);
    this.availableBooksService.saveWishList();

    console.log(this.availableBooksService.availableBooksList);
  }
}
