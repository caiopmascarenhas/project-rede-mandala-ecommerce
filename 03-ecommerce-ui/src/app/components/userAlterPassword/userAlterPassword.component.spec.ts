import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAlterPasswordComponent } from './userAlterPassword.component';

describe('UserAlterPasswordComponent', () => {
  let component: UserAlterPasswordComponent;
  let fixture: ComponentFixture<UserAlterPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAlterPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAlterPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
