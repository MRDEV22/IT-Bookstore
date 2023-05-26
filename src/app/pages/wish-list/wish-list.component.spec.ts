import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListComponent } from './wish-list.component';
import { AvailableBooksService } from 'src/app/services/available-books.service';
import { BookModel } from 'src/app/models/book-model';

describe('WishListComponent', () => {
  let component: WishListComponent;
  let fixture: ComponentFixture<WishListComponent>;
  let mockAvailableBooksService: jasmine.SpyObj<AvailableBooksService>;

  beforeEach(async () => {
    mockAvailableBooksService = jasmine.createSpyObj('AvailableBooksService', [
      'getWishList',
      'removeItemWishlist',
      'saveWishList',
      'saveAvailableBooks',
    ]);

    await TestBed.configureTestingModule({
      declarations: [WishListComponent],
      providers: [
        { provide: AvailableBooksService, useValue: mockAvailableBooksService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve wish list on ngOnInit', () => {
    const mockWishList: BookModel[] = [
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
    mockAvailableBooksService.getWishList.and.returnValue(mockWishList);

    component.ngOnInit();

    expect(mockAvailableBooksService.getWishList).toHaveBeenCalled();
    expect(component.wishList).toEqual(mockWishList);
  });

  it('should perform operations on onHeartClick', () => {
    const mockBook: BookModel = {
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
    const mockIndex = 0;

    // Set up necessary service method spies
    mockAvailableBooksService.whishList = [
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
    mockAvailableBooksService.availableBooksList = []; // Inicializar como un array vacío

    spyOn(mockAvailableBooksService.whishList, 'findIndex').and.returnValue(mockIndex);

    spyOn(mockAvailableBooksService.availableBooksList, 'sort').and.callThrough();

    // Call the component method
    component.onHeartClick(mockBook);

    // Perform necessary assertions
    expect(mockAvailableBooksService.whishList.findIndex).toHaveBeenCalledWith(
      jasmine.any(Function)
    );
    expect(mockAvailableBooksService.whishList[mockIndex].inWishList).toBe(false);
    expect(mockAvailableBooksService.availableBooksList.length).toBeGreaterThan(0);
    expect(mockAvailableBooksService.saveAvailableBooks).toHaveBeenCalled();
    expect(mockAvailableBooksService.removeItemWishlist).toHaveBeenCalledWith(
      mockAvailableBooksService.whishList[mockIndex].id
    );
    expect(mockAvailableBooksService.saveWishList).toHaveBeenCalled();
    expect(mockAvailableBooksService.availableBooksList.sort).toHaveBeenCalled();

  });
});

