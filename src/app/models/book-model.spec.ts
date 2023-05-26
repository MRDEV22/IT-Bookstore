import { BookModel } from './book-model';

describe('BookModel', () => {
  let book: BookModel;

  beforeEach(() => {
    book = new BookModel(
      7,
      'Angular 2 Development with TypeScript',
      'Subtitle',
      '9781617293641',
      '21.99',
      'https://itbook.store/img/books/9781617293641.png',
      false
    );
  });

  it('should create a new instance of BookModel', () => {
    expect(book).toBeTruthy();
  });

  it('should have the correct id', () => {
    expect(book.getId()).toEqual(7);
  });

  it('should have the correct title', () => {
    expect(book.getTitle()).toEqual('Angular 2 Development with TypeScript');
  });

  it('should have the correct subtitle', () => {
    expect(book.getSubtitle()).toEqual('Subtitle');
  });

  it('should have the correct isbn13', () => {
    expect(book.getIsbn13()).toEqual('9781617293641');
  });

  it('should have the correct price', () => {
    expect(book.getPrice()).toEqual('21.99');
  });

  it('should have the correct image', () => {
    expect(book.getImage()).toEqual('https://itbook.store/img/books/9781617293641.png');
  });

  it('should have the correct inWishList value', () => {
    expect(book.isInWishList()).toEqual(false);
  });

  it('should set the id correctly', () => {
    book.setId(3);
    expect(book.getId()).toEqual(3);
  });

  it('should set the title correctly', () => {
    book.setTitle('Progressive Web Apps with Angular');
    expect(book.getTitle()).toEqual('Progressive Web Apps with Angular');
  });

  it('should set the subtitle correctly', () => {
    book.setSubtitle('New Subtitle');
    expect(book.getSubtitle()).toEqual('New Subtitle');
  });

  it('should set the isbn13 correctly', () => {
    book.setIsbn13('9781484244470');
    expect(book.getIsbn13()).toEqual('9781484244470');
  });

  it('should set the price correctly', () => {
    book.setPrice('30.99');
    expect(book.getPrice()).toEqual('30.99');
  });

  it('should set the image correctly', () => {
    book.setImage('https://itbook.store/img/books/9781484254332.png');
    expect(book.getImage()).toEqual('https://itbook.store/img/books/9781484254332.png');
  });

  it('should set the inWishList value correctly', () => {
    book.setInWishList(true);
    expect(book.isInWishList()).toEqual(true);
  });

});
