import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageAccessoriesComponent } from './pageAccessories.component';

describe('PageAccessoriesComponent', () => {
  let component: PageAccessoriesComponent;
  let fixture: ComponentFixture<PageAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
