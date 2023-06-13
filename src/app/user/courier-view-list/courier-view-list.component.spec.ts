import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierViewListComponent } from './courier-view-list.component';

describe('CourierViewListComponent', () => {
  let component: CourierViewListComponent;
  let fixture: ComponentFixture<CourierViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourierViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
