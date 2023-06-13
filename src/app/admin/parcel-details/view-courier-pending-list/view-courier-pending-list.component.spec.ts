import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourierPendingListComponent } from './view-courier-pending-list.component';

describe('ViewCourierPendingListComponent', () => {
  let component: ViewCourierPendingListComponent;
  let fixture: ComponentFixture<ViewCourierPendingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCourierPendingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCourierPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
