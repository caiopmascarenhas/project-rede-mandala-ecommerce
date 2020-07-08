import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEnableComponent } from './product-enable.component';

describe('ProductEnableComponent', () => {
  let component: ProductEnableComponent;
  let fixture: ComponentFixture<ProductEnableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductEnableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEnableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
