import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBranchAddsComponent } from './new-branch-adds.component';


describe('NewBranchAddsComponent', () => {
  let component: NewBranchAddsComponent;
  let fixture: ComponentFixture<NewBranchAddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBranchAddsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBranchAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
