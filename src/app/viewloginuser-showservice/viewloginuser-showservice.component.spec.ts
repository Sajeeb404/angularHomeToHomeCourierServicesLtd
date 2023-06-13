import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewloginuserShowserviceComponent } from './viewloginuser-showservice.component';

describe('ViewloginuserShowserviceComponent', () => {
  let component: ViewloginuserShowserviceComponent;
  let fixture: ComponentFixture<ViewloginuserShowserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewloginuserShowserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewloginuserShowserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
