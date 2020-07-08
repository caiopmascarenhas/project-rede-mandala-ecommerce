import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCheckoutComponent } from './userCheckout.component';

describe('CheckoutComponent', () => {
  let component: UserCheckoutComponent;
  let fixture: ComponentFixture<UserCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
