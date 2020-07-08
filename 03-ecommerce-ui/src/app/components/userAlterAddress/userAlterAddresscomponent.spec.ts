import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAlterAddressComponent } from './userAlterAddress.component';

describe('UserAlterAddressComponent', () => {
  let component: UserAlterAddressComponent;
  let fixture: ComponentFixture<UserAlterAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAlterAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAlterAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
