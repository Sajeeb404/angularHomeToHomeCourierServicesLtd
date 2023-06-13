import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwBranchListComponent } from './veiw-branch-list.component';

describe('VeiwBranchListComponent', () => {
  let component: VeiwBranchListComponent;
  let fixture: ComponentFixture<VeiwBranchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwBranchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiwBranchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
