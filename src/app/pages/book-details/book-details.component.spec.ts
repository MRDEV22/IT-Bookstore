import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsComponent } from './book-details.component';
import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BookDetails } from 'src/app/interfaces/book-response';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let mockActivatedRoute: any;
  let mockBooksService: jasmine.SpyObj<BooksService>;

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: {
        params: { id: '9781617293641' },
      },
    };

    mockBooksService = jasmine.createSpyObj('BooksService', ['getBookDetails']);

    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: BooksService, useValue: mockBooksService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve book details on ngOnInit', () => {
    const mockBookDetails: BookDetails = {
      error: '0',
      title: 'Testing Angular Applications',
      subtitle: 'Sub',
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
      url: 'https://itbook.store/img/books/9781617293641.png'
    };
    mockBooksService.getBookDetails.and.returnValue(of(mockBookDetails));

    component.ngOnInit();

    expect(mockBooksService.getBookDetails).toHaveBeenCalledWith('9781617293641');
    expect(component.bookdetails).toEqual(mockBookDetails);
    expect(component.rating).toBe(Number(mockBookDetails.rating));
  });
});

