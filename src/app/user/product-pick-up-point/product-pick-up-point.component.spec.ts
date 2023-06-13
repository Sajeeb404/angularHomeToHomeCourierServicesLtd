import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPickUpPointComponent } from './product-pick-up-point.component';

describe('ProductPickUpPointComponent', () => {
  let component: ProductPickUpPointComponent;
  let fixture: ComponentFixture<ProductPickUpPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPickUpPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPickUpPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
