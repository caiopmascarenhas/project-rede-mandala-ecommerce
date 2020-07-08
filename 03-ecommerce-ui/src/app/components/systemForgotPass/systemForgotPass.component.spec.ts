import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemForgotPassComponent } from './systemForgotPass.component';

describe('SystemForgotPassComponent', () => {
  let component: SystemForgotPassComponent;
  let fixture: ComponentFixture<SystemForgotPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemForgotPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemForgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
