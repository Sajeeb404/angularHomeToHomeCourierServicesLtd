import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiFormComponent } from './regi-form.component';

describe('RegiFormComponent', () => {
  let component: RegiFormComponent;
  let fixture: ComponentFixture<RegiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
