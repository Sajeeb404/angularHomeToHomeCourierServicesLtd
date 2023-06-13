import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhomebranchesComponent } from './viewhomebranches.component';

describe('ViewhomebranchesComponent', () => {
  let component: ViewhomebranchesComponent;
  let fixture: ComponentFixture<ViewhomebranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewhomebranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewhomebranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
