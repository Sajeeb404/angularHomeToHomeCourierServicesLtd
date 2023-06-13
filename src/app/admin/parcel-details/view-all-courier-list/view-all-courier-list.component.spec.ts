import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCourierListComponent } from './view-all-courier-list.component';

describe('ViewAllCourierListComponent', () => {
  let component: ViewAllCourierListComponent;
  let fixture: ComponentFixture<ViewAllCourierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllCourierListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllCourierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
