import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChargeDetailsComponent } from './product-charge-details.component';

describe('ProductChargeDetailsComponent', () => {
  let component: ProductChargeDetailsComponent;
  let fixture: ComponentFixture<ProductChargeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductChargeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductChargeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
