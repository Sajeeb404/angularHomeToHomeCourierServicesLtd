import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReportsViewComponent } from './all-reports-view.component';

describe('AllReportsViewComponent', () => {
  let component: AllReportsViewComponent;
  let fixture: ComponentFixture<AllReportsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllReportsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllReportsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
