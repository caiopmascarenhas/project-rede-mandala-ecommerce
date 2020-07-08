import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserColumnMenuComponent } from './userColumnMenu.component';

describe('UserColumnMenuComponent', () => {
  let component: UserColumnMenuComponent;
  let fixture: ComponentFixture<UserColumnMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserColumnMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserColumnMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
