import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlterComponent } from './productAlter.component';

describe('ProductAlterComponent', () => {
  let component: ProductAlterComponent;
  let fixture: ComponentFixture<ProductAlterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAlterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
