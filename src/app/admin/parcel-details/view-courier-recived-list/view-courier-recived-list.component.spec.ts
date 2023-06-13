import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourierRecivedListComponent } from './view-courier-recived-list.component';

describe('ViewCourierRecivedListComponent', () => {
  let component: ViewCourierRecivedListComponent;
  let fixture: ComponentFixture<ViewCourierRecivedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCourierRecivedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCourierRecivedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
