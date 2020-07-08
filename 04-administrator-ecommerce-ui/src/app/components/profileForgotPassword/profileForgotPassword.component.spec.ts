import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileForgotPasswordComponent } from './profileForgotPassword.component';

describe('ProfileForgotPasswordComponent', () => {
  let component: ProfileForgotPasswordComponent;
  let fixture: ComponentFixture<ProfileForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
