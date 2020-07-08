import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageProductKidComponent } from './pageProductKid.component';

describe('PageProductKidComponent', () => {
  let component: PageProductKidComponent;
  let fixture: ComponentFixture<PageProductKidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductKidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductKidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
