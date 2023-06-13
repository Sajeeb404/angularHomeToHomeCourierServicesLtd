import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewservicsComponent } from './viewservics.component';

describe('ViewservicsComponent', () => {
  let component: ViewservicsComponent;
  let fixture: ComponentFixture<ViewservicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewservicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewservicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
