import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserratingListComponent } from './viewuserrating-list.component';

describe('ViewuserratingListComponent', () => {
  let component: ViewuserratingListComponent;
  let fixture: ComponentFixture<ViewuserratingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuserratingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewuserratingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
