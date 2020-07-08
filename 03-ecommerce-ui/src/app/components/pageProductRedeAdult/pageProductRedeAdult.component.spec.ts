import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductRedeAdultComponent } from './pageProductRedeAdult.component';

describe('PageProductRedeAdultComponent', () => {
  let component: PageProductRedeAdultComponent;
  let fixture: ComponentFixture<PageProductRedeAdultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProductRedeAdultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProductRedeAdultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
