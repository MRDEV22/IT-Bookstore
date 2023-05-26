import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { AppTitleService } from 'src/app/services/app-title.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockAppTitleService: jasmine.SpyObj<AppTitleService>;

  beforeEach(async () => {
    mockAppTitleService = jasmine.createSpyObj('AppTitleService', ['getAppTitle']);

    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [{ provide: AppTitleService, useValue: mockAppTitleService }],
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
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
