import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourierCancelListComponent } from './view-courier-cancel-list.component';

describe('ViewCourierCancelListComponent', () => {
  let component: ViewCourierCancelListComponent;
  let fixture: ComponentFixture<ViewCourierCancelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCourierCancelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCourierCancelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
