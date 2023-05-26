export class BookModel {
  id: number;
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  inWishList: boolean;

  constructor(
      _id: number,
      _title: string,
      _subtitle: string,
      _isbn13: string,
      _price: string,
      _image: string,
      _inWishList: boolean
  ) {
      this.id = _id
      this.title = _title
      this.subtitle = _subtitle
      this.isbn13 = _isbn13
      this.price = _price
      this.image = _image
      this.inWishList = _inWishList
  }

  public getId(): number {
      return this.id;
  }

  public setId(id: number): void {
      this.id = id;
  }

  public getTitle(): string {
      return this.title;
  }

  public setTitle(title: string): void {
      this.title = title;
  }

  public getSubtitle(): string {
      return this.subtitle;
  }

  public setSubtitle(subtitle: string): void {
      this.subtitle = subtitle;
  }

  public getIsbn13(): string {
      return this.isbn13;
  }

  public setIsbn13(isbn13: string): void {
      this.isbn13 = isbn13;
  }

  public getPrice(): string {
      return this.price;
  }

  public setPrice(price: string): void {
      this.price = price;
  }

  public getImage(): string {
      return this.image;
  }

  public setImage(image: string): void {
      this.image = image;
  }

  public isInWishList(): boolean {
      return this.inWishList;
  }

  public setInWishList(inWishList: boolean): void {
      this.inWishList = inWishList;
  }
}
