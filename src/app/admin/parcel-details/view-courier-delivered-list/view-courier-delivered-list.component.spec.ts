import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourierDeliveredListComponent } from './view-courier-delivered-list.component';

describe('ViewCourierDeliveredListComponent', () => {
  let component: ViewCourierDeliveredListComponent;
  let fixture: ComponentFixture<ViewCourierDeliveredListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCourierDeliveredListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCourierDeliveredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
