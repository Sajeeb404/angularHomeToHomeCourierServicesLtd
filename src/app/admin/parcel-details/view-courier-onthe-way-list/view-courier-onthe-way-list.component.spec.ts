import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourierOntheWayListComponent } from './view-courier-onthe-way-list.component';

describe('ViewCourierOntheWayListComponent', () => {
  let component: ViewCourierOntheWayListComponent;
  let fixture: ComponentFixture<ViewCourierOntheWayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCourierOntheWayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCourierOntheWayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
