import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageProductDetailsComponent } from './pageProductDetails.component';

describe('PageProductDetailsComponent', () => {
  let component: PageProductDetailsComponent;
  let fixture: ComponentFixture<PageProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
