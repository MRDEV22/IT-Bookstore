import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BooksResponse } from '../interfaces/books-response';
import { BookDetails } from '../interfaces/book-response';

describe('BooksService', () => {
  let service: BooksService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BooksService]
    });
    service = TestBed.inject(BooksService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of books', () => {
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

    service.getBooks().subscribe((response: BooksResponse) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${BooksService.BASE_URL}search/angular`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should retrieve book details', () => {
    const mockResponse: BookDetails = {
      error: '0',
      title: 'Testing Angular Applications',
      subtitle: '',
      authors: 'Jesse Palmer, Corinna Cohn, Michael Giambalvo, Craig Nishina',
      publisher: 'Manning',
      language: 'English',
      isbn10: '1617293644',
      isbn13: '9781617293641',
      pages: '240',
      year: '2018',
      rating: '4',
      desc: 'Testing Angular Applications is an example-rich, hands-on guide that gives you the real-world techniques you need to thoroughly test all parts of your Angular applications.',
      price: '$21.99',
      image: 'https://itbook.store/img/books/9781617293641.png',
      url: 'https://itbook.store/img/books/9781617293641'
    };
    const bookId = '123';

    service.getBookDetails(bookId).subscribe((response: BookDetails) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${BooksService.BASE_URL}books/${bookId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
