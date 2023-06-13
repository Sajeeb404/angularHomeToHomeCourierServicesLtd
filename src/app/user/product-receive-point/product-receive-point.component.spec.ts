import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReceivePointComponent } from './product-receive-point.component';

describe('ProductReceivePointComponent', () => {
  let component: ProductReceivePointComponent;
  let fixture: ComponentFixture<ProductReceivePointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReceivePointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReceivePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
