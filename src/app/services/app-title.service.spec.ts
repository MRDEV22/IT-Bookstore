import { TestBed } from '@angular/core/testing';
import { AppTitleService } from './app-title.service';

describe('AppTitleService', () => {
  let appTitleService: AppTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppTitleService],
    });

    appTitleService = TestBed.inject(AppTitleService);
  });

  it('should be created', () => {
    expect(appTitleService).toBeTruthy();
  });

  it('should return the app title', () => {
    const appTitle = appTitleService.getAppTitle();
    expect(appTitle).toBe('IT Bookstore');
  });
});
