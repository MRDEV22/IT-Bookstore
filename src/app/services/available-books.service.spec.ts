import { TestBed } from '@angular/core/testing';
import { AvailableBooksService } from './available-books.service';
import { BookModel } from '../models/book-model';

describe('AvailableBooksService', () => {
  let service: AvailableBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save and retrieve available books from local storage', () => {
    const books: BookModel[] = [
      new BookModel(
        2,
        "Full Stack AngularJS for Java Developers",
        "Build a Full-Featured Web Application from Scratch Using AngularJS with Spring RESTful",
        "9781484231975",
        "$35.85",
        "https://itbook.store/img/books/9781484231975.png",
        false
      ),
      new BookModel(
        7,
        "Angular 2 Development with TypeScript",
        "",
        "9781617293122",
        "$7.00",
        "https://itbook.store/img/books/9781617293122.png",
        false
      ),
      new BookModel(
        9,
        "Getting MEAN with Mongo, Express, Angular, and Node, 2nd Edition",
        "",
        "9781617294754",
        "$30.76",
        "https://itbook.store/img/books/9781617294754.png",
        false
      )
    ];

    service.availableBooksList = books;
    service.saveAvailableBooks();
    const retrievedBooks = service.getAvailableBooks();

    expect(retrievedBooks).toEqual(books);
  });

  it('should save and retrieve wishlist from local storage', () => {
    const wishlist: BookModel[] = [
      new BookModel(
        2,
        "Full Stack AngularJS for Java Developers",
        "Build a Full-Featured Web Application from Scratch Using AngularJS with Spring RESTful",
        "9781484231975",
        "$35.85",
        "https://itbook.store/img/books/9781484231975.png",
        true
      ),
      new BookModel(
        7,
        "Angular 2 Development with TypeScript",
        "",
        "9781617293122",
        "$7.00",
        "https://itbook.store/img/books/9781617293122.png",
        true
      ),
      new BookModel(
        9,
        "Getting MEAN with Mongo, Express, Angular, and Node, 2nd Edition",
        "",
        "9781617294754",
        "$30.76",
        "https://itbook.store/img/books/9781617294754.png",
        true
      )
    ];

    service.whishList = wishlist;
    service.saveWishList();
    const retrievedWishlist = service.getWishList();

    expect(retrievedWishlist).toEqual(wishlist);
  });

  it('should remove an item from available books list', () => {
    const bookToRemove: BookModel = new BookModel(
      10,
      "Fullstack Angular Development,",
      "",
      "ISBN112346",
      "$50.80",
      "image.png",
      false
    )

    service.availableBooksList = [bookToRemove, new BookModel (
      11,
      "TypeScript, 2nd Edition",
      "",
      "ISBN654987",
      "$19.86",
      "typescript.png",
      false
    )];

    service.removeItemAvailableBooks(10);

    expect(service.availableBooksList).toEqual([new BookModel(
      11,
      "TypeScript, 2nd Edition",
      "",
      "ISBN654987",
      "$19.86",
      "typescript.png",
      false
    )]);
  });

  it('should remove an item from wishlist', () => {
    const bookToRemove: BookModel = new BookModel(
      3,
      "Android Development",
      "",
      "ISBN11111",
      "$25.00",
      "458888.png",
      false
    );
    service.whishList = [bookToRemove, new BookModel(
      6,
      "Golang in Action",
      "",
      "96548752",
      "$39.99",
      "79877798.png",
      true
    )];

    service.removeItemWishlist(3);

    expect(service.whishList).toEqual([new BookModel(
      6,
      "Golang in Action",
      "",
      "96548752",
      "$39.99",
      "79877798.png",
      true
    )]);
  });
});
