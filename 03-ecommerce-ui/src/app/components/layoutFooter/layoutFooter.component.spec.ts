import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutFooterComponent } from './layoutFooter.component';

describe('LayoutFooterComponent', () => {
  let component: LayoutFooterComponent;
  let fixture: ComponentFixture<LayoutFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
