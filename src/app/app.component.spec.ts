import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppTitleService } from './services/app-title.service';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockAppTitleService: jasmine.SpyObj<AppTitleService>;

  const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'wish-list',
      component: WishListComponent,
    },
    {
      path: '**',
      redirectTo: '/home'
    }
  ];

  beforeEach(() => {
    // Crear un spyObj del servicio AppTitleService
    mockAppTitleService = jasmine.createSpyObj('AppTitleService', ['getAppTitle']);

    TestBed.configureTestingModule({
      declarations: [AppComponent, NavbarComponent, FooterComponent],
      providers: [
        { provide: AppTitleService, useValue: mockAppTitleService }
      ],
      imports: [
        RouterModule.forRoot(routes) // Agrega las rutas aquí
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize appTitle on ngOnInit', () => {
    const mockTitle = 'App Title';
    // Configurar el valor de retorno del spyObj para el método getAppTitle()
    mockAppTitleService.getAppTitle.and.returnValue(mockTitle);

    // Llamar a ngOnInit
    component.ngOnInit();

    expect(component.appTitle).toEqual(mockTitle);
    expect(mockAppTitleService.getAppTitle).toHaveBeenCalled();
  });
});
