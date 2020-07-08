import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLoginComponent } from './profileLogin.component';

describe('ProfileLoginComponent', () => {
  let component: ProfileLoginComponent;
  let fixture: ComponentFixture<ProfileLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
