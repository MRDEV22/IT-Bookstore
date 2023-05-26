import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/books-response';

import { BooksService } from '../../services/books.service';

import { Router } from '@angular/router';
import { BookModel } from '../../models/book-model';
import { AvailableBooksService } from '../../services/available-books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  public books: Book[] = [];

  public bookList: BookModel[] = [];

  constructor(
    private booksService: BooksService,
    private availableBooksService: AvailableBooksService,
    public router: Router
  ) {
  }

  ngOnInit(): void {

    // check if available_books array is empty
    if (this.availableBooksService.availableBooksList.length > 0){
      this.bookList = this.availableBooksService.availableBooksList;
      console.log(this.bookList);
    }
    else{
      this.booksService.getBooks()
      .subscribe(resp => {
        this.books = resp.books;

        // fill book model list
        for (let i = 0; i < this.books.length; i++) {
          this.bookList.push(new BookModel(i+1,this.books[i].title, this.books[i].subtitle, this.books[i].isbn13, this.books[i].price, this.books[i].image, false));
        }

        //fill bookslist in service
        this.availableBooksService.availableBooksList = this.bookList;
        this.availableBooksService.saveAvailableBooks();
        console.log(this.bookList);
      })
    }
  }

  onBookClick(book: BookModel) {
    this.router.navigate(['/book', book.isbn13]);
  }

  onHeartClick(book: BookModel) {
    var objIndex = this.availableBooksService.availableBooksList.findIndex((obj => obj.isbn13 == book.isbn13));
    this.availableBooksService.availableBooksList[objIndex].inWishList = true;

    // add to wishlist
    if(this.availableBooksService.whishList.length > 0 ){
      let index = this.availableBooksService.whishList.length + 1;
      this.availableBooksService.whishList.splice(index,0,book);
      this.availableBooksService.whishList.join();
      this.availableBooksService.saveWishList();
    }
    else{
      this.availableBooksService.whishList.push(new BookModel(book.id, book.title, book.subtitle, book.isbn13, book.price, book.image, book.inWishList));
      this.availableBooksService.saveWishList();
    }

    // remove from availablebooks list
    this.availableBooksService.removeItemAvailableBooks(this.availableBooksService.availableBooksList[objIndex].id);
    this.availableBooksService.saveAvailableBooks();

    console.log(this.availableBooksService.availableBooksList);
  }
}
