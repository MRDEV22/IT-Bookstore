import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AppTitleService } from 'src/app/services/app-title.service';
import { BooksListComponent } from 'src/app/components/books-list/books-list.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OnlineStatusService } from 'ngx-online-status';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockAppTitleService: jasmine.SpyObj<AppTitleService>;

  beforeEach(async () => {
    mockAppTitleService = jasmine.createSpyObj('AppTitleService', ['getAppTitle']);

    await TestBed.configureTestingModule({
      declarations: [HomeComponent, BooksListComponent],
      providers: [OnlineStatusService, { provide: AppTitleService, useValue: mockAppTitleService }],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAppTitle on ngOnInit', () => {
    component.ngOnInit();
    expect(mockAppTitleService.getAppTitle).toHaveBeenCalled();
  });
});

