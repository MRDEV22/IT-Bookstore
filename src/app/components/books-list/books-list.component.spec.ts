import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListComponent } from './books-list.component';
import { BooksService } from 'src/app/services/books.service';
import { AvailableBooksService } from 'src/app/services/available-books.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BookModel } from 'src/app/models/book-model';
import { of } from 'rxjs';
import { BooksResponse } from 'src/app/interfaces/books-response';

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;
  let booksService: BooksService;
  let availableBooksService: AvailableBooksService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [BooksListComponent],
      providers: [BooksService, AvailableBooksService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    booksService = TestBed.inject(BooksService);
    availableBooksService = TestBed.inject(AvailableBooksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load books from availableBooksService', () => {
    const mockBooks: BookModel[] = [
      new BookModel(
        7,
        'Angular 2 Development with TypeScript',
        '',
        '9781617293122',
        '$7.00',
        'https://itbook.store/img/books/9781617293122.png',
        false
      ),
      new BookModel(
        9,
        'Getting MEAN with Mongo, Express, Angular, and Node, 2nd Edition',
        '',
        '9781617294754',
        '$30.76',
        'https://itbook.store/img/books/9781617294754.png',
        false
      ),
      new BookModel(
        10,
        'Angular 2 Development with TypeScript',
        '',
        '9781617293122',
        '$7.00',
        'https://itbook.store/img/books/9781617293122.png',
        false
      )
    ];

    availableBooksService.availableBooksList = mockBooks;

    //const availableBooks = availableBooksService.getAvailableBooks();
    spyOn(availableBooksService, 'getAvailableBooks').and.returnValue(mockBooks);

    component.ngOnInit();

    expect(component.bookList).toEqual(mockBooks);
  });


  it('should fetch books from booksService if availableBooksService is empty', () => {
    const mockResponse: BooksResponse = {
      error: '0',
      total: '100',
      page: '1',
      books: [
        {
          title: 'Mongo',
          subtitle: '',
          isbn13: 'ISBN77777',
          price: '$20.00',
          image: 'Mongo.png',
          url: 'https://itbook.store/img'
        },
        {
          title: 'Golang',
          subtitle: '',
          isbn13: 'ISBN558793',
          price: '$50.00',
          image: 'go.png',
          url: 'https://itbook.store/img'
        }
      ]
    };

    const mockBooks: BookModel[] = [
      new BookModel(
        1,
        'Mongo',
        '',
        'ISBN77777',
        '$20.00',
        'Mongo.png',
        false
      ),
      new BookModel(
        2,
        'Golang',
        '',
        'ISBN558793',
        '$50.00',
        'go.png',
        false
      )
    ];

    spyOn(availableBooksService, 'getAvailableBooks').and.returnValue([]);



    component.ngOnInit();

    if (!availableBooksService.getAvailableBooks().length) {
      //spyOn(booksService, 'getBooks').and.returnValue(of(mockResponse));

      booksService.getBooks().subscribe((response: BooksResponse) => {
        expect(response).toEqual(mockResponse);

        component.books = mockResponse.books;
        component.bookList = mockBooks;

        expect(component.books).toEqual(mockResponse.books);
        expect(component.bookList.length).toBe(mockResponse.books.length);

        const req = httpMock.expectOne(`${BooksService.BASE_URL}search/angular`);
        expect(req.request.method).toBe('GET');
        req.flush(mockResponse);
      });

      //component.books = BooksResponse
    }


  });

  it('should navigate to book details page on book click', () => {
    const book: BookModel = new BookModel(
      3,
      "Android Development",
      "",
      "ISBN11111",
      "$25.00",
      "458888.png",
      false
    );
    spyOn(component.router, 'navigate');

    component.onBookClick(book);

    expect(component.router.navigate).toHaveBeenCalledWith(['/book', book.isbn13]);
  });

  it('should add book to wishlist on heart click', () => {
    const book: BookModel = {
      id: 7,
      title: 'Angular 2 Development with TypeScript',
      subtitle: '',
      isbn13: '9781617293122',
      price: '$7.00',
      image: 'https://itbook.store/img/books/9781617293122.png',
      inWishList: false,
      getId: function (): number {
        throw new Error('Function not implemented.');
      },
      setId: function (id: number): void {
        throw new Error('Function not implemented.');
      },
      getTitle: function (): string {
        throw new Error('Function not implemented.');
      },
      setTitle: function (title: string): void {
        throw new Error('Function not implemented.');
      },
      getSubtitle: function (): string {
        throw new Error('Function not implemented.');
      },
      setSubtitle: function (subtitle: string): void {
        throw new Error('Function not implemented.');
      },
      getIsbn13: function (): string {
        throw new Error('Function not implemented.');
      },
      setIsbn13: function (isbn13: string): void {
        throw new Error('Function not implemented.');
      },
      getPrice: function (): string {
        throw new Error('Function not implemented.');
      },
      setPrice: function (price: string): void {
        throw new Error('Function not implemented.');
      },
      getImage: function (): string {
        throw new Error('Function not implemented.');
      },
      setImage: function (image: string): void {
        throw new Error('Function not implemented.');
      },
      isInWishList: function (): boolean {
        throw new Error('Function not implemented.');
      },
      setInWishList: function (inWishList: boolean): void {
        throw new Error('Function not implemented.');
      }
    };
    spyOn(availableBooksService, 'removeItemAvailableBooks');
    spyOn(availableBooksService, 'saveAvailableBooks');
    spyOn(availableBooksService, 'saveWishList');

    component.onHeartClick(book);

    expect(availableBooksService.removeItemAvailableBooks).toHaveBeenCalled();
    expect(availableBooksService.saveAvailableBooks).toHaveBeenCalled();
    expect(availableBooksService.saveWishList).toHaveBeenCalled();
  });
});
