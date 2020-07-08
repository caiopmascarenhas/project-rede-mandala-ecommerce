import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemRegisterComponent } from './systemRegister.component';

describe('SystemRegisterComponent', () => {
  let component: SystemRegisterComponent;
  let fixture: ComponentFixture<SystemRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
